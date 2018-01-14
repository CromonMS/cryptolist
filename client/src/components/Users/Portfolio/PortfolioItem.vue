<template>
  <tbody>
    <tr>
      <td>{{ coin.Coin.imageUrl || ''  }}</td>
      <td>{{ coin.Coin.name }}</td>
      <td>{{ coin.quantity }}</td>
      <td class="is-info"><i class="fa fa-btc"></i> {{ btcPrice }}</td>
      <td>{{ }}</td>
      <td class="is-success"><i class="fa fa-btc"></i> {{ coin.quantity * btcPrice }}</td>
      <td class="is-warning has-text-centered">
        <a class="has-text-white" @click.prevent="showExtendedInfo = !showExtendedInfo">
          <i class="fa fa-info" v-if="!showExtendedInfo"></i>
          <i class="fa fa-info-circle" v-else></i>
        </a>
      </td>
      <td class="is-danger has-text-centered">
        <i class="icon is-danger fa fa-minus"></i>
        <i class="icon is-danger fa fa-pencil"></i>        
      </td>
    </tr>
    <tr v-if="showExtendedInfo">
      <td><b>Address:</b></td>
      <td colspan="2">{{ coin.address }}</td>
      <td><b>Location:</b></td>
      <td colspan="2">{{ coin.location }}</td>
    </tr>
  </tbody>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PortfolioItem',
  props: {
    coin: {
      type: Object
    },
    portfolio: {
      type: Object
    }
  },
  data () {
    return {
      btcPrice: null,
      showExtendedInfo: false
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