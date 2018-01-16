<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <h2 class="title">Coins</h2>
        <p>Total Listed Coins {{ coins.length }}</p>
        <coins-list :coins="sortedCoins" :user="user" :isAdmin="isAdmin" :loading="loading"></coins-list>
      </div>
    </div>
  </section>
</template>

<script>
import { isAdmin, utilities } from '@/mixins/'
import CoinsList from './CoinsList'
export default {
  mixins: [isAdmin, utilities],
  name: 'CoinsIndex',
  components: {
    CoinsList
  },
  props: {
    user: {
      type: Object
    }
  },
  computed: {
    coins () {
      return this.$store.getters['coins/coins']
    },
    sortedCoins () {
      return this.coins.sort((a, b) => { return a.rank - b.rank })
    }
  }
}
</script>

<style lang="css" scoped>
</style>