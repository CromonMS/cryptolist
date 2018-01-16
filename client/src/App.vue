<template>
  <div id="app">
    <notifications></notifications>
    <errors></errors>
    <app-header :loggedIn="loggedIn" :user="loggedInUser"></app-header>
    <div class="main">
      <router-view :loggedIn="loggedIn" :user="loggedInUser" />
    </div>
    <app-footer :user="loggedInUser"></app-footer>
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter'
import AppHeader from '@/components/AppHeader'
import Errors from '@/components/Errors'
import Notifications from '@/components/Notifications'
// import { eventbus } from '@/eventbus'

export default {
  components: {
    AppFooter,
    AppHeader,
    Errors,
    Notifications
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
    this.$store.dispatch('faucets/loadFaucets', {endpoint: 'Faucets'}, {root: true})
    // eventbus.$on('successfullLogin', event => {
    //   this.$store.dispatch('auth/setLoggedIn', {root: true})
    // })
    // eventbus.$on('successfullLogout', event => {
    //   this.$store.dispatch('auth/setLoggedOut', {root: true})
    // })
  },
  computed: {
    loggedInUser () {
      return this.$store.getters['user/user']
    },
    loggedIn () {
      return this.$store.getters['user/loggedIn']
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
