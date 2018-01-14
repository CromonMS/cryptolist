<template>
  <tr>
    <td>{{ coin.Coin.name }}</td>
    <td>{{ coin.quantity }}</td>
    <td>{{ btcPrice }}</td>
    <td>{{ }}</td>
    <td>{{ coin.quantity * btcPrice }}</td>
  </tr>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PortfolioItem',
  props: {
    coin: {
      type: Object
    }
  },
  data () {
    return {
      btcPrice: null
    }
  },
  methods: {
    coinPrice () {
      const api = 'https://min-api.cryptocompare.com/data/price?fsym='
      return axios.get(api + this.coin.Coin.symbol + '&tsyms=BTC').then(response => {
        this.btcPrice = response.data.BTC
      }).catch(error => {
        console.log(error)
      })
    }
  },
  created () {
    this.coinPrice()
  }
}
</script>

<style lang="css" scoped>
</style>