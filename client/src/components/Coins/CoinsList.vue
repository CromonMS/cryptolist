<template>
  <div v-if="loading" class="content is-centered">
    loading...
    <hollow-dots-spinner :animation-duration="3000" :size="600" color="#209cee"></hollow-dots-spinner>
  </div>
  <div v-else class="content table-wrapper">
    <table class="table is-narrow is-hoverable">
      <thead>
        <tr>
          <th></th>
          <th>Rank</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Total Coins</th>
          <th>Algorithm</th>
          <th>View</th>
        </tr>
      </thead>
      <coin-item v-for="(coin, index) in coins" :coin="coin" :key="index" :user="user" isAdmin="isAdmin"></coin-item>
    </table>
  </div>    
</template>

<script>
import { HollowDotsSpinner } from 'epic-spinners'
import CoinItem from './CoinItem'
export default {
  name: 'CoinsList',
  components: {
    CoinItem,
    HollowDotsSpinner
  },
  props: {
    coins: {
      type: Array
    },
    user: {
      type: Object
    },
    isAdmin: {
      type: Boolean
    },
    loading: {
      type: Boolean
    }
  },
  created () {
    this.$store.dispatch('coins/loadCoins', {endpoint: 'Coins'}, {root: true})
  }
}
</script>

<style lang="css" scoped>
</style>