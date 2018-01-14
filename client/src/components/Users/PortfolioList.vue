<template>
  <section class="section">
    <div class="container">
      <h3 class="title">Your Portfolio</h3>
      <div class="content">
        <div class="columns">
          <div class="column is-one-third">
            <span>Total Value: {{ portfolioValue }}</span>
          </div>
          <div class="column">
            Total Assets: 110
          </div>
          <div class="column"></div>
        </div>
      </div>
      <div class="content">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>BTC Price</th>
              <th>% of Total</th>
              <th>Value in BTC</th>
            </tr>
          </thead>
          <tbody>
            <portfolio-item v-for="(coin, index) in user.Portfolio[0].PortfolioCoins" :coin="coin" :key="index"></portfolio-item>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import PortfolioItem from './PortfolioItem'
export default {
  name: 'PortfolioList',
  components: {
    PortfolioItem
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {

    }
  },
  computed: {
    portfolioValue () {
      return 3000
    }
  }
}
</script>

<style lang="css" scoped>
</style>