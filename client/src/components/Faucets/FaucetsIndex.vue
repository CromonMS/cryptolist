<template>
  <section class="section">
    <div class="container">
      <h2 class="title">Faucets</h2>
      <p>A selection of Faucets to get free coins from.</p>
      <p>A Faucet is a reward system where users can claim free coins via captcha or a task.</p>
      <faucets-list :faucets="faucets" :user="user" :isAdmin="isAdmin"></faucets-list>
    </div>
  </section>
</template>

<script>
import { isAdmin } from '@/mixins/'
import FaucetsList from './FaucetsList'
export default {
  mixins: [isAdmin],
  name: 'FaucetIndex',
  components: {
    FaucetsList
  },
  props: {
    user: {
      type: Object
    }
  },
  computed: {
    faucets () {
      return this.$store.getters['faucets/faucets']
    }
  }
}
</script>

<style lang="css" scoped>
</style>