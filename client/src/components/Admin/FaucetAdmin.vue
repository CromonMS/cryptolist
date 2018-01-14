<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <button class="button is-link" @click.prevent="newFaucet = !newFaucet">
          <span v-if="!newFaucet">ADD NEW</span>
          <span v-if="newFaucet">CLOSE</span>
        </button>
      </div>
      <div class="content">
        <div v-if="newFaucet">
          <new-faucet></new-faucet>    
        </div>
      </div>
      <div class="content">
        <faucets-list :faucets="faucets" :user="user"></faucets-list>
      </div>
    </div>
  </section>
</template>

<script>
import FaucetsList from '@/components/Faucets/FaucetsList'
import NewFaucet from './Faucets/NewFaucet'
export default {
  name: 'FaucetAdmin',
  components: {
    FaucetsList,
    NewFaucet
  },
  props: {
    user: {
      type: Object
    }
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