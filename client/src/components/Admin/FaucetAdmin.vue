<template>
  <section class="section">
    <div class="container">
      <button class="button is-info" @click.prevent="newFaucet = !newFaucet">
        <span v-if="!newFaucet">ADD NEW</span>
        <span v-if="newFaucet">CLOSE</span>
      </button>
      <br>
      <br>
      <div v-if="newFaucet">
        <new-faucet></new-faucet>    
      </div>
      <div class="container">
        <faucet-list :faucets="faucets"></faucet-list>
      </div>
    </div>
  </section>
</template>

<script>
import FaucetList from './Faucets/FaucetList'
import NewFaucet from './Faucets/NewFaucet'
export default {
  name: 'FaucetAdmin',
  components: {
    FaucetList,
    NewFaucet
  },
  data () {
    return {
      newFaucet: false
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