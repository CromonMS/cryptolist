<template>
  <div class="container">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-start">
          <a class="navbar-item" href="#/user/portfolio">PORTFOLIO</a>
          <a class="navbar-item" href="#/user/profile">PROFILE</a>
         </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'UserDashboardNav',
  props: {
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