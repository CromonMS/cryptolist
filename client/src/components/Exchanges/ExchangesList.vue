<template>
  <div class="content">
    <table class="table is-narrow is-hoverable">
      <thead>
        <tr>
          <th>Name</th>
          <th v-if="isAdmin">URL</th>
          <th>Trading Pairs</th>
          <th>Location</th>
          <th>24h Vol</th>
          <th>VISIT</th>
          <th v-if="isAdmin" colspan="2">Actions</th>
        </tr>
      </thead>
      <exchange-item v-for="(exchange, index) in exchanges" :exchange="exchange" :key="index" :isAdmin="isAdmin" :user="user"></exchange-item>
    </table>
  </div>
</template>

<script>
import ExchangeItem from './ExchangeItem'
export default {
  name: 'ExchangesList',
  components: {
    ExchangeItem
  },
  props: {
    exchanges: {
      type: Array
    },
    user: {
      type: Object
    },
    isAdmin: {
      type: Boolean
    }
  },
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('exchanges/loadExchanges', {endpoint: 'Exchanges'}, {root: true})
  }
}
</script>

<style lang="css" scoped>
</style>