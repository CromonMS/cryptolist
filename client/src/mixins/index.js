/* jslint node: true */

'use strict'

import axios from 'axios'

// utility mixins
export const utilities = {
  methods: {
    titleCase: str => str.charAt(0).toUpperCase() + str.slice(1),
    topOfWindow: () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  },
  computed: {
    loading () {
      return this.$store.getters['utility/loading']
    }
  }
}

// coinPrice mixin
export const coinPrice = {
  methods: {
    coinPrice: symbol => {
      // Returns a Promise
      const api = 'https://min-api.cryptocompare.com/data/price?fsym='
      return axios.get(api + symbol + '&tsyms=BTC')
    }
  }
}

// isAdmin mixin
export const isAdmin = {
  computed: {
    isAdmin () {
      return this.user && this.user.Role[0].name === 'admin'
    }
  }
}

export const baseRate = {
}
