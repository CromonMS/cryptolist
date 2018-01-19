<template>
  <section class="section">
    <div class="container" v-if="!loggedIn">
      <div class="content">
        ACCESS DENIED
      </div>
    </div>
    <div class="container" v-else>
      <div class="content">
        <h2>User Dashboard</h2>
        <user-dashboard-nav></user-dashboard-nav>
        <div class="container">
          <div class="content">
            <div class="columns">
              <div class="column is-one-third">
                PIE CHART OF ASSETS
              </div>
              <div class="column">
                PIE CHART OF LOCATIONS
              </div>
              <div class="column">
                BAR CHART OF BALANCE
              </div>
            </div>
          </div>
        </div>        
      </div>
      <br>  
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
  }
}
</script>

<style lang="css" scoped>
</style>