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
│ NEAR/USD: $3.41 
│  UTO/USD: $0.06379435211607791 
│ GEAR/USD: $0.037500255209601666 
│ NEXP/USD: $0.05027880176389273 
│ NEKO/USD: $0.0000341 
│ ASAC/USD: $0 
│ 
└── Prices ──┘
┌── Owned ──┐
│
│ Undeads
│   - Total Investment: 847.49 Ⓝ
│   - Number of shares: 40
│   -    Average Price: 21.1872 Ⓝ
│   - Reward per share: 1 $UTO ≈ 0.0187 Ⓝ (≈ $0.0638)
│   - Reward per   day: 40 $UTO ≈ 0.7483 Ⓝ (≈ $2.5518)
│   - Reward per month: 1200 $UTO ≈ 22.4496 Ⓝ (≈ $76.5532) (2.65%)
│   -     ROI Timeline: 37.8 months
│
│ Grimms
│   - Total Investment: 246 Ⓝ
│   - Number of shares: 2
│   -    Average Price: 123 Ⓝ
│   - Reward per share: 6 $UTO ≈ 0.1122 Ⓝ (≈ $0.3828)
│   - Reward per   day: 12 $UTO ≈ 0.2245 Ⓝ (≈ $0.7655)
│   - Reward per month: 360 $UTO ≈ 6.7349 Ⓝ (≈ $22.966) (2.74%)
│   -     ROI Timeline: 36.5 months
│
│ EngiNEART
│   - Total Investment: 269.5 Ⓝ
│   - Number of shares: 15
│   -    Average Price: 17.9667 Ⓝ
│   - Reward per share: 0.6 Ⓝ (≈ $2.046)
│   - Reward per   day: 0.3 Ⓝ (≈ $1.023)
│   - Reward per month: 9 Ⓝ (≈ $30.69) (3.34%)
│   -     ROI Timeline: 29.9 months
│
│ Tinker Union #671
│   - Total Investment: 25 Ⓝ
│   - Number of shares: 1
│   -    Average Price: 25 Ⓝ
│   - Reward per share: 2.2418 $GEAR ≈ 0.0247 Ⓝ (≈ $0.0841)
│   - Reward per   day: 2.2418 $GEAR ≈ 0.0247 Ⓝ (≈ $0.0841)
│   - Reward per month: 67.2553 $GEAR ≈ 0.7396 Ⓝ (≈ $2.5221) (2.96%)
│   -     ROI Timeline: 33.8 months
│
└── Owned ──┘
┌── Unowned ──┐
│
│ Undeads Floor
│   - Total Investment: 104.7 Ⓝ
│   - Number of shares: 6
│   -    Average Price: 17.45 Ⓝ
│   - Reward per share: 1 $UTO ≈ 0.0187 Ⓝ (≈ $0.0638)
│   - Reward per   day: 6 $UTO ≈ 0.1122 Ⓝ (≈ $0.3828)
│   - Reward per month: 180 $UTO ≈ 3.3674 Ⓝ (≈ $11.483) (3.22%)
│   -     ROI Timeline: 31.1 months
│
│ Grimms Floor
│   - Total Investment: 637.98 Ⓝ
│   - Number of shares: 5
│   -    Average Price: 127.596 Ⓝ
│   - Reward per share: 6 $UTO ≈ 0.1122 Ⓝ (≈ $0.3828)
│   - Reward per   day: 30 $UTO ≈ 0.5612 Ⓝ (≈ $1.9138)
│   - Reward per month: 900 $UTO ≈ 16.8372 Ⓝ (≈ $57.4149) (2.64%)
│   -     ROI Timeline: 37.9 months
│
│ EngiNEART Offers
│   - Total Investment: 56.4 Ⓝ
│   - Number of shares: 3
│   -    Average Price: 18.8 Ⓝ
│   - Reward per share: 0.6 Ⓝ (≈ $2.046)
│   - Reward per   day: 0.06 Ⓝ (≈ $0.2046)
│   - Reward per month: 1.8 Ⓝ (≈ $6.138) (3.19%)
│   -     ROI Timeline: 31.3 months
│
│ EngiNEART Floor
│   - Total Investment: 114.73 Ⓝ
│   - Number of shares: 6
│   -    Average Price: 19.1217 Ⓝ
│   - Reward per share: 0.6 Ⓝ (≈ $2.046)
│   - Reward per   day: 0.12 Ⓝ (≈ $0.4092)
│   - Reward per month: 3.6 Ⓝ (≈ $12.276) (3.14%)
│   -     ROI Timeline: 31.9 months
│
│ Skellies Floor
│   - Total Investment: 794 Ⓝ
│   - Number of shares: 3
│   -    Average Price: 264.6667 Ⓝ
│   - Reward per share: 10 $UTO ≈ 0.1871 Ⓝ (≈ $0.6379)
│   - Reward per   day: 30 $UTO ≈ 0.5612 Ⓝ (≈ $1.9138)
│   - Reward per month: 900 $UTO ≈ 16.8372 Ⓝ (≈ $57.4149) (2.12%)
│   -     ROI Timeline: 47.2 months
│
│ Skullingham Estates Floor
│   - Total Investment: 700 Ⓝ
│   - Number of shares: 2
│   -    Average Price: 350 Ⓝ
│   - Reward per share: 12 $UTO ≈ 0.2245 Ⓝ (≈ $0.7655)
│   - Reward per   day: 24 $UTO ≈ 0.449 Ⓝ (≈ $1.5311)
│   - Reward per month: 720 $UTO ≈ 13.4698 Ⓝ (≈ $45.9319) (1.92%)
│   -     ROI Timeline: 52 months
│
│ Tinker Union #1843 (Rank #1)
│   - Total Investment: 200 Ⓝ
│   - Number of shares: 1
│   -    Average Price: 200 Ⓝ
│   - Reward per share: 5.2888 $GEAR ≈ 0.0582 Ⓝ (≈ $0.1983)
│   - Reward per   day: 5.2888 $GEAR ≈ 0.0582 Ⓝ (≈ $0.1983)
│   - Reward per month: 158.6628 $GEAR ≈ 1.7448 Ⓝ (≈ $5.9499) (0.87%)
│   -     ROI Timeline: 114.6 months
│
└── Unowned ──┘
```
