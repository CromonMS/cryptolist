<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <h2>Coins Admin</h2>
        <button class="button is-link" @click.prevent="newCoin = !newCoin">
          <span v-if="!newCoin">ADD NEW</span>
          <span v-if="newCoin">CLOSE</span>
        </button>        
      </div>
      <div class="content">
        <div v-if="newCoin">
          <new-coin></new-coin>    
        </div>
      </div>
      <div class="content">
        <coins-list :coins="coins" :user="user" :isAdmin="isAdmin"></coins-list>
      </div>
    </div>
  </section>
</template>

<script>
import { isAdmin } from '@/mixins/'
import NewCoin from './Coins/NewCoin'
import CoinsList from '@/components/Coins/CoinsList'
export default {
  mixins: [isAdmin],
  name: 'CoinAdmin',
  components: {
    CoinsList,
    NewCoin
  },
  props: {
    user: {
      type: Object
    }
  },
  data () {
    return {
      newCoin: false
    }
  },
  computed: {
    coins () {
      return this.$store.getters['coins/coins']
    }
  }
}
</script>

<style lang="css" scoped>
</style>