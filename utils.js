const fs = require('fs');
const path = require('path');
const https = require('https');
const {promisify} = require('util');

let read = promisify(fs.readFile);
let write = promisify(fs.writeFile);

let retry =
  (tries, fn) =>
  (...args) =>
    Array.apply(null, {length: tries}).reduce((f, _) => f.catch(() => fn(...args)), Promise.reject());

let request = (r, data) =>
  retry(
    2,
    promisify((x, c) =>
      https
        .request(x, r => {
          r.setEncoding('utf8');
          let buf = '';
          r.on('data', d => (buf += d));
          r.on('error', c);
          r.on('end', () => {
            try {
              c(null, JSON.parse(buf.replace(/^\0+|\0+$/g, '').trim()));
            } catch (e) {
              c(e);
            }
          });
        })
        .end(data && JSON.stringify(data)),
    ),
  )(r);

let price = (a, b) =>
  cache.get('price."near"', 5 * 60000, () =>
    // refreshes once in 5 minutes
    request({
      host: 'api.coingecko.com',
      path: `/api/v3/simple/price?ids=${a}&vs_currencies=${b}`,
    }),
  );

let rpc_query = async params => {
  let response = await request(
    {
      host: 'rpc.mainnet.near.org',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    {
      id: 'dontcare',
      jsonrpc: '2.0',
      method: 'query',
      params,
    },
  );
  if ('result' in response && 'result' in response.result) {
    response.result.result = String.fromCharCode(...response.result.result);
    try {
      response.result.result = JSON.parse(response.result.result);
    } catch {}
  }
  return response;
};

let ref_pool = (pool_id, account_ids) =>
  cache.get(`pool."${pool_id}"`, 5 * 60000, async () => {
    // refreshes once in 5 minutes
    let response = await rpc_query({
      finality: 'final',
      request_type: 'call_function',
      account_id: 'v2.ref-finance.near',
      method_name: 'get_pool',
      args_base64: Buffer.from(`{"pool_id":${pool_id}}`).toString('base64'),
    });
    if ('result' in response && 'result' in response.result) {
      let {
        result: {result: pool},
      } = response;
      let [a, b] = [new Set(account_ids), new Set(pool.token_account_ids)];
      if (a.size == b.size && [...a].every(id => b.has(id))) {
        return pool;
      }
      let err = new Error('Pool Mismatch');
      err.expected_ids = account_ids;
      err.found_ids = pool.token_account_ids;
      throw err;
    }
    let err = new Error('Unexpected RPC Response');
    err.response = response;
    throw err;
  });

let ft_metadata = account_id =>
  cache.get(`ft_metadata."${account_id}"`, 24 * 3_600_000, () =>
    // refreshes every day
    rpc_query({
      finality: 'final',
      request_type: 'call_function',
      account_id,
      method_name: 'ft_metadata',
      args_base64: Buffer.from('{}').toString('base64'),
    }),
  );

let get_pool_price = async (pool_id, account_ids) => {
  let pool_data = await ref_pool(pool_id, account_ids);
  let amounts = {};
  for (let [i, contract_id] of pool_data.token_account_ids.entries()) {
    let {
      result: {
        result: {decimals},
      },
    } = await ft_metadata(contract_id);
    amounts[contract_id] = parseInt(pool_data.amounts[i], 10) / 10 ** decimals;
  }
  return account_ids.reduce((a, id) => (typeof a === 'string' ? amounts[a] : a) / (amounts[id] || 1));
};

const fixed = (v, x = 4) => v.toFixed(x).replace(/0+$/, '').replace(/\.$/, '');

let cache = async () => {
  if (!cache.loaded) {
    try {
      let buf = await read(path.join(__dirname, '.cache'));
      cache.state = new Map(Object.entries(JSON.parse(Buffer.from(buf.toString(), 'base64').toString())));
    } catch {}
    cache.loaded = 1;
  }
  if (!cache.modified) return;
  cache.modified |= 0;
  cache.state.set('timestamp', Date.now());
  let buf = Buffer.from(JSON.stringify(Object.fromEntries(cache.state.entries()))).toString('base64');
  await write(path.join(__dirname, '.cache'), buf);
};
cache.modified = 0;
cache.loaded = 0;
cache.state = new Map([['timestamp', 0]]);
cache.get = async (key, exp, getter) => {
  if (!cache.state.has(key) || Date.now() > cache.state.get('timestamp') + exp) {
    cache.state.set(key, await getter());
    cache.modified |= 1;
  }
  return cache.state.get(key);
};

module.exports = {fixed, cache, get_pool_price, ft_metadata, ref_pool, rpc_query, price, request};
