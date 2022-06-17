# near-tokens

Performs the reward analysis of NEAR tokens.

## Demo

[![ASCII Demo](https://github.com/miraclx/near-tokens/raw/master/media/demo.gif)](https://asciinema.org/a/502023?autoplay=1 "Click to view ASCII")

## Usage

- Update the state of your portfolio in [`state.js`](state.js).
- Run `node main.js`

```console
$ node main.js --owned
┌── Prices ──┐ 
│ 
│ NEAR/USD: $3.34 
│  UTO/USD: $0.06576743753268183 
│ GEAR/USD: $0.03534170851196004 
│ NEXP/USD: $0.04674707717972356 
│ NEKO/USD: $0.0000334 
│ ASAC/USD: $0 
│ 
└── Prices ──┘
┌── Owned ──┐
│
│ Undeads
│   - Total Investment: 847.49 Ⓝ (≈ $2830.6166)
│   - Number Of Shares: 40
│   -    Average Price: 21.1872 Ⓝ
│   - Reward Per Share: 1 $UTO ≈ 0.0197 Ⓝ (≈ $0.0658)
│   - Reward Per   Day: 40 $UTO ≈ 0.7876 Ⓝ (≈ $2.6307)
│   - Reward Per Month: 1200 $UTO ≈ 23.629 Ⓝ (≈ $78.9209) (2.79%)
│   -     ROI Timeline: 35.9 months
│
│ Grimms
│   - Total Investment: 246 Ⓝ (≈ $821.64)
│   - Number Of Shares: 2
│   -    Average Price: 123 Ⓝ
│   - Reward Per Share: 6 $UTO ≈ 0.1181 Ⓝ (≈ $0.3946)
│   - Reward Per   Day: 12 $UTO ≈ 0.2363 Ⓝ (≈ $0.7892)
│   - Reward Per Month: 360 $UTO ≈ 7.0887 Ⓝ (≈ $23.6763) (2.88%)
│   -     ROI Timeline: 34.7 months
│
│ EngiNEART
│   - Total Investment: 305.5 Ⓝ (≈ $1020.37)
│   - Number Of Shares: 17
│   -    Average Price: 17.9706 Ⓝ
│   - Reward Per Share: 0.6 Ⓝ (≈ $2.004)
│   - Reward Per   Day: 0.34 Ⓝ (≈ $1.1356)
│   - Reward Per Month: 10.2 Ⓝ (≈ $34.068) (3.34%)
│   -     ROI Timeline: 30 months
│
│ NEARton Central District #399
│   - Total Investment: 185 Ⓝ (≈ $617.9)
│   - Number Of Shares: 1
│   -    Average Price: 185 Ⓝ
│   - Reward Per Share: 28.36 $NEXP ≈ 0.3969 Ⓝ (≈ $1.3257)
│   - Reward Per   Day: 28.36 $NEXP ≈ 0.3969 Ⓝ (≈ $1.3257)
│   - Reward Per Month: 850.8 $NEXP ≈ 11.9079 Ⓝ (≈ $39.7724) (6.44%)
│   -     ROI Timeline: 15.5 months
│
│ NEARton Central District #312
│   - Total Investment: 85 Ⓝ (≈ $283.9)
│   - Number Of Shares: 1
│   -    Average Price: 85 Ⓝ
│   - Reward Per Share: 19.092 $NEXP ≈ 0.2672 Ⓝ (≈ $0.8925)
│   - Reward Per   Day: 19.092 $NEXP ≈ 0.2672 Ⓝ (≈ $0.8925)
│   - Reward Per Month: 572.76 $NEXP ≈ 8.0164 Ⓝ (≈ $26.7749) (9.43%)
│   -     ROI Timeline: 10.6 months
│
│ NEARton Central District #130
│   - Total Investment: 100 Ⓝ (≈ $334)
│   - Number Of Shares: 1
│   -    Average Price: 100 Ⓝ
│   - Reward Per Share: 27.13 $NEXP ≈ 0.3797 Ⓝ (≈ $1.2682)
│   - Reward Per   Day: 27.13 $NEXP ≈ 0.3797 Ⓝ (≈ $1.2682)
│   - Reward Per Month: 813.9 $NEXP ≈ 11.3915 Ⓝ (≈ $38.0474) (11.39%)
│   -     ROI Timeline: 8.8 months
│
│ NEARton Central District #155
│   - Total Investment: 80 Ⓝ (≈ $267.2)
│   - Number Of Shares: 1
│   -    Average Price: 80 Ⓝ
│   - Reward Per Share: 18.84 $NEXP ≈ 0.2637 Ⓝ (≈ $0.8807)
│   - Reward Per   Day: 18.84 $NEXP ≈ 0.2637 Ⓝ (≈ $0.8807)
│   - Reward Per Month: 565.2 $NEXP ≈ 7.9106 Ⓝ (≈ $26.4214) (9.89%)
│   -     ROI Timeline: 10.1 months
│
│ NEARton Central District #40 (Offer)
│   - Total Investment: 61 Ⓝ (≈ $203.74)
│   - Number Of Shares: 1
│   -    Average Price: 61 Ⓝ
│   - Reward Per Share: 14.981 $NEXP ≈ 0.2097 Ⓝ (≈ $0.7003)
│   - Reward Per   Day: 14.981 $NEXP ≈ 0.2097 Ⓝ (≈ $0.7003)
│   - Reward Per Month: 449.43 $NEXP ≈ 6.2903 Ⓝ (≈ $21.0095) (10.31%)
│   -     ROI Timeline: 9.7 months
│
│ Tinker Union #671
│   - Total Investment: 25 Ⓝ (≈ $83.5)
│   - Number Of Shares: 1
│   -    Average Price: 25 Ⓝ
│   - Reward Per Share: 2.2418 $GEAR ≈ 0.0237 Ⓝ (≈ $0.0792)
│   - Reward Per   Day: 2.2418 $GEAR ≈ 0.0237 Ⓝ (≈ $0.0792)
│   - Reward Per Month: 67.2553 $GEAR ≈ 0.7117 Ⓝ (≈ $2.3769) (2.85%)
│   -     ROI Timeline: 35.1 months
│
│ Good Fortune Felines
│   - Total Investment: 70.4 Ⓝ (≈ $235.136)
│   - Number Of Shares: 3
│   -    Average Price: 23.4667 Ⓝ
│   - Reward Per Share: 864 $NEKO ≈ 0.0086 Ⓝ (≈ $0.0289)
│   - Reward Per   Day: 2592 $NEKO ≈ 0.0259 Ⓝ (≈ $0.0866)
│   - Reward Per Month: 77760 $NEKO ≈ 0.7776 Ⓝ (≈ $2.5972) (1.1%)
│   -     ROI Timeline: 90.5 months
│
│ Bullish Bulls (NEXP)
│   - Total Investment: 43.949 Ⓝ (≈ $146.7897)
│   - Number Of Shares: 3
│   -    Average Price: 14.6497 Ⓝ
│   - Reward Per Share: 0.2 $NEXP ≈ 0.0028 Ⓝ (≈ $0.0093)
│   - Reward Per   Day: 0.6 $NEXP ≈ 0.0084 Ⓝ (≈ $0.028)
│   - Reward Per Month: 18 $NEXP ≈ 0.2519 Ⓝ (≈ $0.8414) (0.57%)
│   -     ROI Timeline: 174.4 months
│
│ Antisocial Ape Club #94 (NEXP)
│   - Total Investment: 110 Ⓝ (≈ $367.4)
│   - Number Of Shares: 1
│   -    Average Price: 110 Ⓝ
│   - Reward Per Share: 1.2 $NEXP ≈ 0.0168 Ⓝ (≈ $0.0561)
│   - Reward Per   Day: 1.2 $NEXP ≈ 0.0168 Ⓝ (≈ $0.0561)
│   - Reward Per Month: 36 $NEXP ≈ 0.5039 Ⓝ (≈ $1.6829) (0.46%)
│   -     ROI Timeline: 218.3 months
│
│ ┌── Owned Stats ──┐
│ │
│ │  - Total Investment: 2159.339 Ⓝ (≈ $7212.1923)
│ │  - Number Of Shares: 72
│ │  - Est. Daily Yield: 2.956 Ⓝ (≈ $9.873) (0.14%)
│ │  -    Monthly Yield: 88.6794 Ⓝ (≈ $296.1893) (4.11%)
│ │  -     Annual Yield: 1064.1533 Ⓝ (≈ $3554.2722) (49.28%)
│ │  -     ROI Timeline: 24.3 months
│ │
│ └── Owned Stats ──┘
│
└── Owned ──┘
```
