<template>
  <div class="content">
    <table class="table is-narrow is-hoverable">
      <thead>
        <tr>
          <th>Name</th>
          <th v-if="isAdmin">URL</th>
          <th>Timer</th>
          <th>Reward</th>
          <th>Coin</th>
          <th>Active</th>
          <th>VISIT</th>
          <th v-if="isAdmin" colspan="2">Actions</th>
        </tr>
      </thead>
      <exchange-item v-for="(exchange, index) in exchanges" :exchange="exchange" :key="index" :isAdmin="isAdmin"></exchange-item>
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
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="css" scoped>
</style>