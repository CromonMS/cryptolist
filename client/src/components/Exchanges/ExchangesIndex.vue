<template>
  <section class="section">
    <div class="container">
      <h2 class="title">Exchanges</h2>
      <p>A selection of Exchanges to trade and buy coins.</p>
    </div>
  </section>
</template>

<script>
import ExchangesList from './ExchangesList'
export default {
  name: 'ExchangesIndex',
  components: {
    ExchangesList
  },
  data () {
    return {

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