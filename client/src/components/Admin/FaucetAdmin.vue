<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <h2>Faucets Admin</h2>
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
        <faucets-list :faucets="faucets" :user="user" :isAdmin="isAdmin"></faucets-list>
      </div>
    </div>
  </section>
</template>

<script>
import { isAdmin } from '@/mixins/'
import FaucetsList from '@/components/Faucets/FaucetsList'
import NewFaucet from './Faucets/NewFaucet'
export default {
  mixins: [isAdmin],
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