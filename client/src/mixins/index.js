/* jslint node: true */

'use strict'

import axios from 'axios'

export default {
  methods: {
    titleCase: str => str.charAt(0).toUpperCase() + str.slice(1),
    coinPrice: symbol => {
      // Returns a Promise
      const api = 'https://min-api.cryptocompare.com/data/price?fsym='
      return axios.get(api + symbol + '&tsyms=BTC')
    }
  }
}
