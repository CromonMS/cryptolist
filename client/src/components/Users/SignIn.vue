<template>
  <section class="section">
    <div class="container">
      <div class="field">
        <label for="email">Email</label>
        <div class="control has-icons-left">
          <input class="input" type="email" name="email" placeholder="Email" v-model="user.email">
          <span class="icon is-small is-left"><i class="fa fa-envelope"></i></span>
        </div>
      </div>
      <div class="field">
        <label for="password">Password</label>
        <div class="control has-icons-left">
          <input class="input" type="password" name="password" placeholder="password" v-model="user.password">
          <span class="icon is-small is-left"><i class="fa fa-key"></i></span>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-text is-small" @click.prevent="forgotPassword">FORGOT PASSWORD</button>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" @click.prevent="signIn">SUBMIT</button>
        </div>
        <div class="control">
          <button class="button is-link is-danger" @click.prevent="clearForm">CANCEL</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      this.$router.push('/user/dashboard')
    },
    clearForm () {
      this.user.email = ''
      this.user.password = ''
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css" scoped>
</style>