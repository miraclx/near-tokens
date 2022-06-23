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
    shares: [16.9, 20, 17.3, 19, 16, 17.2, 17.49, 17.21, 18, 17.5, 18, 22, 17.5, 17.5, 17.9, 18, 18],
  },
  'NEARton Central District #399': {
    reward: {
      // 10 SR = 1 $NEXP daily
      value: 283.6 / 10,
      token: 'NEXP',
      cadence: 'daily',
    },
    shares: [185],
  },
  'NEARton Central District #312': {
    reward: {
      // 10 SR = 1 $NEXP daily
      value: 190.92 / 10,
      token: 'NEXP',
      cadence: 'daily',
    },
    shares: [85],
  },
  'NEARton Central District #130': {
    reward: {
      // 10 SR = 1 $NEXP daily
      value: 271.3 / 10,
      token: 'NEXP',
      cadence: 'daily',
    },
    shares: [100],
  },
  'NEARton Central District #155': {
    reward: {
      // 10 SR = 1 $NEXP daily
      value: 188.4 / 10,
      token: 'NEXP',
      cadence: 'daily',
    },
    shares: [80],
  },
  'NEARton Central District #40': {
    reward: {
      // 10 SR = 1 $NEXP daily
      value: 149.81 / 10,
      token: 'NEXP',
      cadence: 'daily',
    },
    shares: [61], // [75, 69.99]
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
  'Good Fortune Felines': {
    reward: {
      // 1 SR = 72 $NEKO daily
      value: 12 * 72,
      token: 'NEKO',
      cadence: 'daily',
    },
    shares: [40, 15, 15.4],
  },
  'Bullish Bulls (NEXP)': {
    reward: {
      // 10 SR = 1 $NEXP daily
      value: 2 / 10,
      token: 'NEXP',
      cadence: 'daily',
    },
    shares: [25, 11, 7.949],
  },
  'Antisocial Ape Club #94 (NEXP)': {
    reward: {
      // 10 SR = 1 $NEXP daily
      value: 12 / 10,
      token: 'NEXP',
      cadence: 'daily',
    },
    shares: [110], // <──────────────────────┐
  }, //                                      │
  // 'Antisocial Ape Club #94 (ASAC)': {     │
  //   reward: {                             │
  //     value: 3,                           ├──> resolve duplicacy
  //     token: 'ASAC',                      │
  //     cadence: 'daily',                   │
  //   },                                    │
  //   shares: [110], // <───────────────────┘
  // },
};

let unowned = {
  'Undeads Floor': {
    reward: {
      value: 1,
      token: 'UTO',
      cadence: 'daily',
    },
    shares: [17, 17, 17, 17.9, 17.9, 17.9],
  },
  'Grimms Floor': {
    reward: {
      value: 6,
      token: 'UTO',
      cadence: 'daily',
    },
    shares: [115, 124.69, 127, 127, 129.29, 130],
  },
  'EngiNEART Offers': {
    reward: {
      value: 0.6,
      token: 'NEAR',
      cadence: 'monthly',
    },
    shares: [21],
  },
  'EngiNEART Floor': {
    reward: {
      value: 0.6,
      token: 'NEAR',
      cadence: 'monthly',
    },
    shares: [18.87, 18.88, 18.99, 19, 19, 19.99],
  },
  'Skellies Floor': {
    reward: {
      value: 10,
      token: 'UTO',
      cadence: 'daily',
    },
    shares: [260, 265, 269], // floor
  },
  'Skullingham Estates Floor': {
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

export default {pools, owned, unowned};
