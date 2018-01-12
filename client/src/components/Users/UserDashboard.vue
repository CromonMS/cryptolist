<template>
  <section class="section">
    <div class="container" v-if="!loggedIn">
      ACCESS DENIED
    </div>
    <div class="container" v-else>
      USER DASHBOARD
      <br>
      User: {{ user }}
      <br>
      Portfolio: {{ user.portfolio }}
    </div>
  </section>
</template>

<script>
export default {
  name: 'UserDashboard',
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