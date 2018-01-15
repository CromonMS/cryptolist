<template>
  <section class="section">
    <div class="container">
      <h2 class="title">Your Portfolio</h2>
      <div class="content">
        <button class="button is-info" @click="showNew = !showNew">
          <span v-if="!showNew">ADD NEW ASSET</span>
          <span v-else>CLOSE</span>
        </button>
      </div>
      <div class="content">
        <div class="columns">
          <div class="column is-one-third">
            <!-- <span>Total Value: <i class="icon fa fa-btc"></i> {{ totalPortfolioBtcValue }}</span> -->
            <span>Total Value: <i class="fa fa-btc"></i> {{ totalPortfolioBtcValue }} <a @click="updatePortfolioValue" class="icon has-text-danger"><i class="fa fa-refresh" :class="{'fa-spin': this.totalPortfolioBtcValue == 'updating'}" aria-hidden="true"></i></a></span>
          </div>
          <div class="column">
            Total Assets: {{ user.Portfolio[0].PortfolioCoins.length }}
          </div>
          <div class="column"></div>
        </div>
      </div>
      <div class="content">
        <new-asset v-if="showNew" :user="user"></new-asset>
      </div>
      <div class="content table-wrapper">
        <portfolio-list :user="user"></portfolio-list>
      </div>
    </div>
  </section>
</template>

<script>
import mixins from '@/mixins/index'
import NewAsset from './Portfolio/NewAsset'
import PortfolioList from './Portfolio/PortfolioList'
export default {
  name: 'UserPortfolio',
  mixins: [ mixins ],
  components: {
    NewAsset,
    PortfolioList
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showNew: false,
      totalPortfolioBtcValue: null,
      lastUpdated: Date.now()
    }
  },
  methods: {
    portfolioValue () {
      let value = 0
      this.user.Portfolio[0].PortfolioCoins.map((coin) => {
        this.coinPrice(coin.Coin.symbol).then(response => {
          let btcCoinPrice = response.data.BTC * coin.quantity
          value += btcCoinPrice
          this.totalPortfolioBtcValue = value
        })
      })
    },
    updatePortfolioValue () {
      let currentUpdateTime = this.lastUpdated
      let currentTime = Date.now()
      if (currentUpdateTime + 10000 > currentTime) {
        console.log('too soon')
      } else {
        this.portfolioValue()
      }
    }
  },
  created () {
    this.portfolioValue()
  }
}
</script>

<style lang="css" scoped>
</style>