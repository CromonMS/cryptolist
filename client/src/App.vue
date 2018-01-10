<template>
  <div id="app">
    <app-header></app-header>
    <div class="main">
      <router-view/>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  components: {
    AppHeader,
    AppFooter
  },
  name: 'app',
  created () {
    this.$store.dispatch('coins/loadCoins', {endpoint: 'Coins'}, {root: true})
  }
}
</script>

<style>
</style>
