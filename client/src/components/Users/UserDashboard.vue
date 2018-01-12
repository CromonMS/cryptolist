<template>
  <section class="section">
    <div class="container" v-if="!loggedIn">
      ACCESS DENIED
    </div>
    <div class="container" v-else>
      USER DASHBOARD
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
  }
}
</script>

<style lang="css" scoped>
</style>