const https = require('https');
const {promisify} = require('util');

let sleep = promisify(setTimeout);

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
  request({
    host: 'api.coingecko.com',
    path: `/api/v3/simple/price?ids=${a}&vs_currencies=${b}`,
  });

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

let ref_pool = async (pool_id, account_ids) => {
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
};

let ft_metadata_cache = new Map();

let ft_metadata = async account_id => {
  if (!ft_metadata_cache.has(account_id))
    ft_metadata_cache.set(
      account_id,
      await rpc_query({
        finality: 'final',
        request_type: 'call_function',
        account_id,
        method_name: 'ft_metadata',
        args_base64: Buffer.from('{}').toString('base64'),
      }),
    );
  return ft_metadata_cache.get(account_id);
};

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

module.exports = {fixed, sleep, get_pool_price, ft_metadata, ref_pool, rpc_query, price, request};
