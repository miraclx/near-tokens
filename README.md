# near-tokens

Performs the reward analysis of NEAR tokens.

## Demo

[![ASCII Demo](https://github.com/miraclx/near-tokens/raw/master/media/demo.gif)](https://asciinema.org/a/500734?autoplay=1 "Click to view ASCII")

## Usage

- Update the state of your portfolio in [`state.js`](state.js).
- Run `node main.js`

```console
$ node main.js --owned
┌── Prices ──┐
│
│ NEAR/USD: $3.62
│  UTO/USD: $0.06906060097283742
│ GEAR/USD: $0.03908839211103263
│ NEXP/USD: $0.051815404446584064
│ NEKO/USD: $0.000036200000000000006
│ ASAC/USD: $0
│
└── Prices ──┘
┌── Owned ──┐
│
│ Undeads
│   - Total Investment: 847.49 Ⓝ (≈ $3067.9138)
│   - Number Of Shares: 40
│   -    Average Price: 21.1872 Ⓝ
│   - Reward Per Share: 1 $UTO ≈ 0.0191 Ⓝ (≈ $0.0691)
│   - Reward Per   Day: 40 $UTO ≈ 0.7631 Ⓝ (≈ $2.7624)
│   - Reward Per Month: 1200 $UTO ≈ 22.893 Ⓝ (≈ $82.8727) (2.7%)
│   -     ROI Timeline: 37 months
│
│ Grimms
│   - Total Investment: 246 Ⓝ (≈ $890.52)
│   - Number Of Shares: 2
│   -    Average Price: 123 Ⓝ
│   - Reward Per Share: 6 $UTO ≈ 0.1145 Ⓝ (≈ $0.4144)
│   - Reward Per   Day: 12 $UTO ≈ 0.2289 Ⓝ (≈ $0.8287)
│   - Reward Per Month: 360 $UTO ≈ 6.8679 Ⓝ (≈ $24.8618) (2.79%)
│   -     ROI Timeline: 35.8 months
│
│ EngiNEART
│   - Total Investment: 287.5 Ⓝ (≈ $1040.75)
│   - Number Of Shares: 16
│   -    Average Price: 17.9688 Ⓝ
│   - Reward Per Share: 0.6 Ⓝ (≈ $2.172)
│   - Reward Per   Day: 0.32 Ⓝ (≈ $1.1584)
│   - Reward Per Month: 9.6 Ⓝ (≈ $34.752) (3.34%)
│   -     ROI Timeline: 29.9 months
│
│ NEARton Central District #399
│   - Total Investment: 185 Ⓝ (≈ $669.7)
│   - Number Of Shares: 1
│   -    Average Price: 185 Ⓝ
│   - Reward Per Share: 28.36 $NEXP ≈ 0.4059 Ⓝ (≈ $1.4695)
│   - Reward Per   Day: 28.36 $NEXP ≈ 0.4059 Ⓝ (≈ $1.4695)
│   - Reward Per Month: 850.8 $NEXP ≈ 12.1781 Ⓝ (≈ $44.0845) (6.58%)
│   -     ROI Timeline: 15.2 months
│
│ NEARton Central District #312
│   - Total Investment: 85 Ⓝ (≈ $307.7)
│   - Number Of Shares: 1
│   -    Average Price: 85 Ⓝ
│   - Reward Per Share: 19.092 $NEXP ≈ 0.2733 Ⓝ (≈ $0.9893)
│   - Reward Per   Day: 19.092 $NEXP ≈ 0.2733 Ⓝ (≈ $0.9893)
│   - Reward Per Month: 572.76 $NEXP ≈ 8.1983 Ⓝ (≈ $29.6778) (9.65%)
│   -     ROI Timeline: 10.4 months
│
│ Tinker Union #671
│   - Total Investment: 25 Ⓝ (≈ $90.5)
│   - Number Of Shares: 1
│   -    Average Price: 25 Ⓝ
│   - Reward Per Share: 2.2418 $GEAR ≈ 0.0242 Ⓝ (≈ $0.0876)
│   - Reward Per   Day: 2.2418 $GEAR ≈ 0.0242 Ⓝ (≈ $0.0876)
│   - Reward Per Month: 67.2553 $GEAR ≈ 0.7262 Ⓝ (≈ $2.6289) (2.9%)
│   -     ROI Timeline: 34.4 months
│
│ Good Fortune Felines
│   - Total Investment: 70.4 Ⓝ (≈ $254.848)
│   - Number Of Shares: 3
│   -    Average Price: 23.4667 Ⓝ
│   - Reward Per Share: 864 $NEKO ≈ 0.0086 Ⓝ (≈ $0.0313)
│   - Reward Per   Day: 2592 $NEKO ≈ 0.0259 Ⓝ (≈ $0.0938)
│   - Reward Per Month: 77760 $NEKO ≈ 0.7776 Ⓝ (≈ $2.8149) (1.1%)
│   -     ROI Timeline: 90.5 months
│
│ Bullish Bulls (NEXP)
│   - Total Investment: 43.949 Ⓝ (≈ $159.0954)
│   - Number Of Shares: 3
│   -    Average Price: 14.6497 Ⓝ
│   - Reward Per Share: 0.2 $NEXP ≈ 0.0029 Ⓝ (≈ $0.0104)
│   - Reward Per   Day: 0.6 $NEXP ≈ 0.0086 Ⓝ (≈ $0.0311)
│   - Reward Per Month: 18 $NEXP ≈ 0.2576 Ⓝ (≈ $0.9327) (0.59%)
│   -     ROI Timeline: 170.6 months
│
│ ┌── Owned Stats ──┐
│ │
│ │  - Total Investment: 1790.339 Ⓝ (≈ $6481.0272)
│ │  - Number Of Shares: 67
│ │  - Est. Daily Yield: 2.05 Ⓝ (≈ $7.4208) (0.11%)
│ │  -    Monthly Yield: 61.4987 Ⓝ (≈ $222.6254) (3.44%)
│ │  -     Annual Yield: 737.9846 Ⓝ (≈ $2671.5044) (41.22%)
│ │  -     ROI Timeline: 29.1 months
│ │
│ └── Owned Stats ──┘
│
└── Owned ──┘
```
