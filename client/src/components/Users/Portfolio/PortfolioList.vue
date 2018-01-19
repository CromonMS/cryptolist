<template>
  <div class="content">
    <div class="content">
      <table class="table is-narrow is-hoverable">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Quantity</th>
            <th>BTC Price</th>
            <th>% of Total</th>
            <th>Value in BTC</th>
            <th>Value in {{ user.currency }}</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <portfolio-item v-for="(coin, index) in user.Portfolio[0].PortfolioCoins" :coin="coin" :key="index" :portfolio="user.Portfolio[0]"></portfolio-item>
      </table>
    </div>
  </div>
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
  }
}
</script>

<style lang="css" scoped>
</style>