let Progress = require('xprogress');

let utils = require('./utils');
let state = require('./state');

async function main(args) {
  let arg_state = [
    ['--prices', 0b0001],
    ['--owned', 0b0010],
    ['--unowned', 0b0100],
    ['--refresh', 0b1000],
  ].reduce((a, [f, m]) => (args.includes(f) ? a | m : a), 0b0000);
  if (!arg_state) arg_state = 0b0111;

  if (!(arg_state & 0b1000)) await utils.cache();

  let pools = [...Object.entries(state.pools)].map(([token, meta]) => [
    token,
    meta,
    utils.get_pool_price(meta.id, meta.contract_pair),
  ]);

  let bar = new Progress(1 + Object.values(state.pools).length, {
    clean: true,
    template: '\x1b[38;5;244m(:{completed}/:{total}) :{label}..\x1b[0m',
  });

  bar.label('NEAR/USD').draw();
  let {
    near: {usd: near_usd},
  } = await utils.price('near', 'usd');
  bar.print('┌── Prices ──┐');
  bar.print('│');
  bar.print(`│ NEAR/USD: $${near_usd}`);
  bar.tickValue(1).draw();

  for (let [token, meta, price] of pools) {
    bar.label(`${token}/USD`).draw();
    meta.price = await price;
    bar.print(`│ ${token.padStart(4, ' ')}/USD: $${meta.price * near_usd}`);
    bar.tickValue(1).draw();
  }

  bar.print('│');
  bar.end('└── Prices ──┘\n');

  await utils.cache();

  let fmt$ = (v, token, pre = false, sym = true, spaced = true) => {
    let str = [v, `${token && token !== 'NEAR' ? `${sym ? '$' : ''}${token}` : 'Ⓝ'}`];
    if (pre) str.reverse();
    return str.join(spaced ? ' ' : '');
  };
  let near$ = (v, token) => {
    if (!token || token === 'NEAR') return v;
    if (token in state.pools) return v * state.pools[token].price;
    throw new Error(`Invalid NFT token reward: ${token}`);
  };
  let usd$fmt = (v, token) => fmt$(utils.fixed(near$(v, token) * near_usd), '$', true, false, false);
  let near$fmt = (v, token) => fmt$(utils.fixed(near$(v, token)));

  for (let [header, tokens, mask] of [
    ['Owned', state.owned, 0b010],
    ['Unowned', state.unowned, 0b100],
  ]) {
    if (!(arg_state & mask)) continue;
    if (!Object.keys(tokens).length) continue;
    console.log(`┌── ${header} ──┐`);
    for (let [name, meta] of Object.entries(tokens)) {
      console.log('│');
      console.log(`│ ${name}`);
      let total_share_value = meta.shares.reduce((a, v) => a + v, 0);
      console.log(`│   - Total Investment: ${fmt$(utils.fixed(total_share_value))}`);
      console.log(`│   - Number of shares: ${meta.shares.length}`);
      console.log(`│   -    Average Price: ${fmt$(utils.fixed(total_share_value / meta.shares.length))}`);
      console.log(
        `│   - Reward per share: ${fmt$(utils.fixed(meta.reward.value), meta.reward.token)} ${
          meta.reward.token !== 'NEAR' ? `≈ ${near$fmt(meta.reward.value, meta.reward.token)} ` : ''
        }(≈ ${usd$fmt(meta.reward.value, meta.reward.token)})`,
      );
      let cummulative_reward = meta.reward.value * meta.shares.length;
      let daily_token_reward, monthly_token_reward;
      if (meta.reward.cadence === 'daily') {
        daily_token_reward = cummulative_reward;
        monthly_token_reward = cummulative_reward * 30;
      } else if (meta.reward.cadence === 'monthly') {
        monthly_token_reward = cummulative_reward;
        daily_token_reward = cummulative_reward / 30;
      } else throw new Error('Unexpected reward cadence');
      console.log(
        `│   - Reward per   day: ${fmt$(utils.fixed(daily_token_reward), meta.reward.token)} ${
          meta.reward.token !== 'NEAR' ? `≈ ${near$fmt(daily_token_reward, meta.reward.token)} ` : ''
        }(≈ ${usd$fmt(daily_token_reward, meta.reward.token)})`,
      );
      console.log(
        `│   - Reward per month: ${fmt$(utils.fixed(monthly_token_reward), meta.reward.token)} ${
          meta.reward.token !== 'NEAR' ? `≈ ${near$fmt(monthly_token_reward, meta.reward.token)} ` : ''
        }(≈ ${usd$fmt(monthly_token_reward, meta.reward.token)}) (${utils.fixed(
          utils.fixed(near$(monthly_token_reward, meta.reward.token) * 100) / total_share_value,
          2,
        )}%)`,
      );
      console.log(
        `│   -     ROI Timeline: ${utils.fixed(total_share_value / near$(monthly_token_reward, meta.reward.token), 1)} months`,
      );
    }
    console.log('│');
    console.log(`└── ${header} ──┘`);
  }
}

main(process.argv.slice(2)).catch(err => {
  console.error(err);
  process.exit(1);
});
