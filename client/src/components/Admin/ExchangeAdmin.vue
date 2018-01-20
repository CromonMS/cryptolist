<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <h2>Exchanges Admin</h2>
        <button class="button is-link" @click.prevent="newExchange = !newExchange">
          <span v-if="!newExchange">ADD NEW</span>
          <span v-if="newExchange">CLOSE</span>
        </button>        
      </div>
      <div class="content">
        <div v-if="newExchange">
          <new-exchange></new-exchange>    
        </div>
      </div>
      <div class="content">
        <exchanges-list :exchanges="exchanges" :user="user" :isAdmin="isAdmin"></exchanges-list>
      </div>      
    </div>
  </section>
</template>

<script>
import { isAdmin } from '@/mixins/'
import ExchangesList from '@/components/Exchanges/ExchangesList'
import NewExchange from './Exchanges/NewExchange'
export default {
  mixins: [isAdmin],
  name: 'ExchangeAdmin',
  components: {
    ExchangesList,
    NewExchange
  },
  props: {
    user: {
      type: Object
    }
  },
  data () {
    return {
      newExchange: false
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