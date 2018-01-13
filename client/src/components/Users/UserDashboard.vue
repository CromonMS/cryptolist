<template>
  <section class="section">
    <div class="container" v-if="!loggedIn">
      ACCESS DENIED
    </div>
    <div class="container" v-else>
      <user-dashboard-nav></user-dashboard-nav>
      USER DASHBOARD
      <br>
      User: <pre>{{ user }}</pre>
      <br>
      Portfolio: <pre>{{ user.Portfolio }}</pre>
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
    }
  },
  data () {
    return {
    }
  },
  computed: {
    user () {
      return this.$store.getters['auth/user']
    },
    portfolio () {
      return this.$store.getters['users/portfolio']
    }
  }
}
</script>

<style lang="css" scoped>
</style>