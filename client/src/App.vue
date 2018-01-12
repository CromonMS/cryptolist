<template>
  <div id="app">
    <app-header :loggedIn="loggedIn"></app-header>
    <div class="main">
      <router-view :loggedIn="loggedIn" />
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
// import { eventbus } from '@/eventbus'

export default {
  components: {
    AppHeader,
    AppFooter
  },
  name: 'app',
  data () {
    return {
      // loggedIn: false
    }
  },
  methods: {
    loggedInStatus () {
      if (!this.loggedIn) {
        this.$router.push('/')
      }
    }
  },
  created () {
    this.$store.dispatch('coins/loadCoins', {endpoint: 'Coins'}, {root: true})
    // eventbus.$on('successfullLogin', event => {
    //   this.$store.dispatch('auth/setLoggedIn', {root: true})
    // })
    // eventbus.$on('successfullLogout', event => {
    //   this.$store.dispatch('auth/setLoggedOut', {root: true})
    // })
  },
  computed: {
    loggedInUser () {
      return this.$store.getters['auth/user']
    },
    loggedIn () {
      return this.$store.getters['auth/loggedIn']
    }
  },
  watch: {
    loggedIn () {
      this.loggedInStatus()
    }
  }
}
</script>

<style>
</style>
