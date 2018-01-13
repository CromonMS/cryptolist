<template>
  <section class="section">
    <div class="container" v-if="!loggedIn">
      ACCESS DENIED
    </div>
    <div class="container" v-else>
      <user-dashboard-nav></user-dashboard-nav>
      USER DASHBOARD
      <br>
      <!-- {{ user }} -->
      <span v-for="coin in user.Portfolio[0].PortfolioCoins">
        <ul>
            <li>{{ coin.Coin.name }}</li>
            <li>{{ coin.quantity }}</li>
            <li></li>
        </ul>
      </span>

<!--       <br>
      User: <pre>{{ user }}</pre>
      <br>
      Portfolio: <pre>{{ user.Portfolio }}</pre> -->
    </div>
  </section>
</template>

<script>
import UserDashboardNav from './UserDashboardNav'
export default {
  name: 'UserDashboard',
  components: {
    UserDashboardNav
  },
  props: {
    loggedIn: {
      type: Boolean,
      required: true
    },
    user: {
      type: Object
    }
  },
  data () {
    return {
    }
  },
  methods: {
    coinPrice (coinName) {
      setTimeout(() => {
        console.log('name', coinName)
      }, 3000)
    }
  },
  computed: {
    // user () {
    //   return this.$store.getters['auth/user']
    // },
    portfolio () {
      return this.$store.getters['users/portfolio']
    }
  }
}
</script>

<style lang="css" scoped>
</style>