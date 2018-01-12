<template>
  <section class="section">
    <div class="container">
      <div class="field" v-if="showUserName">
        <label for="username">Username</label>
        <div class="control has-icons-left">
          <input class="input" type="username" name="username" placeholder="Username" v-model="user.username">
          <span class="icon is-extra-small is-left"><i class="fa fa-user"></i></span>
        </div>
        <a class="button is-small is-success" @click.prevent="showUserName = false">
          <span class="icon"><i class="fa fa-envelope"></i></span>
          <span>USE EMAIL</span>
        </a>
      </div>
      <div class="field" v-if="!showUserName">
        <label for="email">Email</label>
        <div class="control has-icons-left">
          <input class="input" type="email" name="email" placeholder="Email" v-model="user.email">
          <span class="icon is-extra-small is-left"><i class="fa fa-envelope"></i></span>
        </div>
        <a class="button is-small is-success" @click.prevent="showUserName = true">
          <span class="icon"><i class="fa fa-user"></i></span>
          <span>USE USERNAME</span>
        </a>
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
// import { eventbus } from '@/eventbus'
export default {
  name: 'SignIn',
  props: {
    loggedIn: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      user: {
        username: 'cromon',
        email: 'e@cromon.co.uk',
        password: '123456'
      },
      showUserName: false
    }
  },
  methods: {
    signIn () {
      this.$store.dispatch('auth/loginUser', {user: this.user}, {root: true})
    },
    clearForm () {
      this.user.email = ''
      this.user.password = ''
      this.$router.push('/')
    },
    forwardToDashboard () {
      this.$router.push('/user/dashboard')
    }
  },
  watch: {
    loggedIn () {
      this.forwardToDashboard()
    }
  }
}
</script>

<style lang="css" scoped>
</style>