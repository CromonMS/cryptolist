# cryptolist-frontend

> Cryptolist Frontend

## Development

New features are welcome if they can add to the App without too much complexity, the idea is to keep the front end relatively simple (I know there are some complex v-if's around, we are trying to simplify all that where possible)

### Style Guide

Each secton is split into: Index, List & Item, for instance: CoinsIndex, CoinsList & CoinItem if adding any sections then please use this format as it ensures continuity of development.

#### Indexes

Should always have this base:

```html
  <section class="section">
    <div class="container">
      <div class="content">
        <h2 class="title">Coins</h2>
      </div>
    </div>
  </section>
```


#### Mixins

The following mixins are avaiable to be used on components:

##### utilities

```javascript
import { utilities } from '@/mixins/'
```

Utilities:

titleCase (string) <- to Titleize a String.
topOfWindow <- Used in Footer links to return to the top of the page.

##### coinPrice

Requires a Coin Symbol in the component (either Prop or Computed)

e.g. coinPrice(user.Portfolio[0].PortfolioCoins[0].coin.symbol)

```javascript
import { coinPrice } from '@/mixins/'
```

##### isAdmin

Requires a user Object in the component (either Prop or Computed)

```javascript
import { isAdmin } from '@/mixins/'
```


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
