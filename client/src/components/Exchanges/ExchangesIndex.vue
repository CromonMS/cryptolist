<template>
  <section class="section">
    <div class="container">
      <h2 class="title">Exchanges</h2>
      <p>A selection of Exchanges to trade and buy coins.</p>
      <exchanges-list :exchanges="exchanges" :user="user" :isAdmin="isAdmin"></exchanges-list>
    </div>
  </section>
</template>

<script>
import { isAdmin } from '@/mixins'
import ExchangesList from './ExchangesList'
export default {
  mixins: [isAdmin],
  name: 'ExchangesIndex',
  components: {
    ExchangesList
  },
  props: {
    user: {
      type: Object
    }
  },
  computed: {
    exchanges () {
      return this.$store.getters['exchanges/exchanges']
    }
  }
}
</script>

<style lang="css" scoped>
</style>