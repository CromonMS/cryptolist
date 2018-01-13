<template>
  <section class="section">
    <div class="container">
      <h2 class="title">Admin Dashboard</h2>
      <div class="columns">
        <div class="column is-one-third">
          <span class="subtitle">Last 5 Users</span>
        </div>
        <div class="column">
          <span class="subtitle">Server Status</span>
          <ul>
            <li>Referrer: {{ referrer }}</li>
            <li>Host: {{ host }}</li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="column">
          <span class="subtitle">Database Stats</span>
          <ul>
            <li>Users: 45</li>
            <li>Faucets: 12</li>
            <li>Coins: 1300</li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AdminIndex',
  data () {
    return {

    }
  },
  computed: {
    referrer () {
      return document.referrer
    },
    host () {
      return location.host
    }
  }
}
</script>

<style lang="css" scoped>
</style>