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
      20.2 // nke
    ]
    /* eslint-enable */
  },
  Grimms: {
    reward: {
      value: 6,
      token: 'UTO',
      cadence: 'daily',
    },
    /* eslint-disable */
    shares: [
      120, 126
    ]
    /* eslint-enable */
  },
  EngiNEART: {
    reward: {
      value: 0.6,
      token: 'NEAR',
      cadence: 'monthly',
    },
    /* eslint-disable */
    shares: [
      16.9, 20, 17.3, 19, 16, 17.2, 17.49, 17.21,
      20, 18, 18, 17.6, 17.1, 17, 16, // offers
    ]
    /* eslint-enable */
  },
  'Tinker Union #671': {
    reward: {
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
    shares: [
      200, // only worth it at 50 Ⓝ
    ],
  },
};

module.exports = {pools, owned, unowned};
