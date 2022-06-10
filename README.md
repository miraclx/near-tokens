# near-tokens

Performs the reward analysis of NEAR tokens.

## Demo

[![ASCII Demo](https://github.com/miraclx/near-tokens/raw/master/media/demo.gif)](https://asciinema.org/a/500734?autoplay=1 "Click to view ASCII")

## Usage

- Update the state of your portfolio in [`state.js`](state.js).
- Run `node main.js`

```console
$ node main.js
┌── Prices ──┐ 
│ 
│ NEAR/USD: $5.07 
│  UTO/USD: $0.1657197906095062 
│ GEAR/USD: $0.062437684758344894 
│ NEXP/USD: $0.07944534336850628 
│ NEKO/USD: $0.000050700000000000006 
│ ASAC/USD: $0 
│ 
└── Prices ──┘
┌── Owned ──┐
│
│ Undeads
│   - Total Investment: 566.8 Ⓝ
│   - Number of shares: 23
│   -    Average Price: 24.6435 Ⓝ
│   - Reward per share: 1 $UTO ≈ 0.0327 Ⓝ (≈ $0.1657)
│   - Reward per   day: 23 $UTO ≈ 0.7518 Ⓝ (≈ $3.8116)
│   - Reward per month: 690 $UTO ≈ 22.5536 Ⓝ (≈ $114.3467) (3.98%)
│   -     ROI Timeline: 25.1 months
│
│ Grimms
│   - Total Investment: 246 Ⓝ
│   - Number of shares: 2
│   -    Average Price: 123 Ⓝ
│   - Reward per share: 6 $UTO ≈ 0.1961 Ⓝ (≈ $0.9943)
│   - Reward per   day: 12 $UTO ≈ 0.3922 Ⓝ (≈ $1.9886)
│   - Reward per month: 360 $UTO ≈ 11.7671 Ⓝ (≈ $59.6591) (4.78%)
│   -     ROI Timeline: 20.9 months
│
│ EngiNEART
│   - Total Investment: 264.8 Ⓝ
│   - Number of shares: 15
│   -    Average Price: 17.6533 Ⓝ
│   - Reward per share: 0.6 Ⓝ (≈ $3.042)
│   - Reward per   day: 0.3 Ⓝ (≈ $1.521)
│   - Reward per month: 9 Ⓝ (≈ $45.63) (3.4%)
│   -     ROI Timeline: 29.4 months
│
│ Tinker Union #671
│   - Total Investment: 25 Ⓝ
│   - Number of shares: 1
│   -    Average Price: 25 Ⓝ
│   - Reward per share: 2.2418 $GEAR ≈ 0.0276 Ⓝ (≈ $0.14)
│   - Reward per   day: 2.2418 $GEAR ≈ 0.0276 Ⓝ (≈ $0.14)
│   - Reward per month: 67.2553 $GEAR ≈ 0.8283 Ⓝ (≈ $4.1993) (3.31%)
│   -     ROI Timeline: 30.2 months
│
└── Owned ──┘
┌── Unowned ──┐
│
│ Skellies
│   - Total Investment: 480 Ⓝ
│   - Number of shares: 2
│   -    Average Price: 240 Ⓝ
│   - Reward per share: 10 $UTO ≈ 0.3269 Ⓝ (≈ $1.6572)
│   - Reward per   day: 20 $UTO ≈ 0.6537 Ⓝ (≈ $3.3144)
│   - Reward per month: 600 $UTO ≈ 19.6118 Ⓝ (≈ $99.4319) (4.09%)
│   -     ROI Timeline: 24.5 months
│
│ Skullingham Estates
│   - Total Investment: 700 Ⓝ
│   - Number of shares: 2
│   -    Average Price: 350 Ⓝ
│   - Reward per share: 12 $UTO ≈ 0.3922 Ⓝ (≈ $1.9886)
│   - Reward per   day: 24 $UTO ≈ 0.7845 Ⓝ (≈ $3.9773)
│   - Reward per month: 720 $UTO ≈ 23.5342 Ⓝ (≈ $119.3182) (3.36%)
│   -     ROI Timeline: 29.7 months
│
│ Tinker Union #1843 (Rank #1)
│   - Total Investment: 200 Ⓝ
│   - Number of shares: 1
│   -    Average Price: 200 Ⓝ
│   - Reward per share: 5.2888 $GEAR ≈ 0.0651 Ⓝ (≈ $0.3302)
│   - Reward per   day: 5.2888 $GEAR ≈ 0.0651 Ⓝ (≈ $0.3302)
│   - Reward per month: 158.6628 $GEAR ≈ 1.954 Ⓝ (≈ $9.9065) (0.98%)
│   -     ROI Timeline: 102.4 months
│
└── Unowned ──┘
```
