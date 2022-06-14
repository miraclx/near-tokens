let pools = {
  // https://app.ref.finance/pools
  UTO: {
    id: 2973,
    contract_pair: ['wrap.near', 'utopia.secretskelliessociety.near'],
  },
  GEAR: {
    id: 3411,
    contract_pair: ['wrap.near', 'gear.enleap.near'],
  },
  NEXP: {
    id: 3432,
    contract_pair: ['wrap.near', 'nexp.near'],
  },
  NEKO: {
    id: 3254,
    contract_pair: ['wrap.near', 'ft.nekotoken.near'],
  },
  ASAC: {
    id: 3456,
    contract_pair: ['wrap.near', 'coin.asac.near'],
  },
};

let owned = {
  Undeads: {
    reward: {
      value: 1,
      token: 'UTO',
      cadence: 'daily',
    },
    /* eslint-disable */
    shares: [
      4.2, 4.2, // minted
      25, 29, 25, 30, 35, 38, 26, // initial sweep
      25, 26, 20.2, 24, 25, 22, 22, 20, 40, 33, 26, 25, // vexed sweep
      22, // timi
      20.2, // nke
      17.5, 18, 17, 17.55, 14.89, 17, 15.87, 14.88, // dip sweep
      17.9, 17, 15, 15, 16, 16, 16.8, 16.3, 18      // dip sweep
    ]
    /* eslint-enable */
  },
  Grimms: {
    reward: {
      value: 6,
      token: 'UTO',
      cadence: 'daily',
    },
    shares: [120, 126],
  },
  EngiNEART: {
    reward: {
      value: 0.6,
      token: 'NEAR',
      cadence: 'monthly',
    },
    /* eslint-disable */
    shares: [
      16.9, 20, 17.3, 19, 16, 17.2, 17.49,
      17.21, 17.5, 18, 22, 17.5, 17.5, 17.9, 18
    ]
    /* eslint-enable */
  },
  'Tinker Union #671': {
    reward: {
      // https://docs.google.com/spreadsheets/d/1FFV7no3o2y5ZRFCS4mzwTAk5zR6aioZZ7-PMDY5Wfqg
      value: 2.241842769,
      token: 'GEAR',
      cadence: 'daily',
    },
    shares: [25],
  },
};

let unowned = {
  Skellies: {
    reward: {
      value: 10,
      token: 'UTO',
      cadence: 'daily',
    },
    shares: [230, 250], // floor
  },
  'Skullingham Estates': {
    reward: {
      value: 12,
      token: 'UTO',
      cadence: 'daily',
    },
    shares: [350, 350], // floor
  },
  'Tinker Union #1843 (Rank #1)': {
    reward: {
      value: 5.288759074,
      token: 'GEAR',
      cadence: 'daily',
    },
    shares: [200], // only worth it at 50 Ⓝ
  },
};

module.exports = {pools, owned, unowned};
