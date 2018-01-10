<template>
  <div class="container is-fluid">
    <div class="title">Please add an Admin User</div>
    <div class="file has-name">
      <label class="file-label" for="avatar">
        <input class="file-input" type="file" name="avatar">
        <span class="file-cta">
          <span class="file-icon">
            <i class="fa fa-upload"></i>
          </span>
          <span class="file-label">
            Choose an avatar...
          </span>
        </span>
        <span class="file-name">
          {{ user.avatar }}
        </span>
      </label>
    </div>
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
      <label class="checkbox" for="admin">
        <input type="checkbox" name="admin" v-model="user.admin" checked>
        Admin?
      </label>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" @click.prevent="addUser">SUBMIT</button>
      </div>
      <div class="control">
        <button class="button is-link is-danger" @click.prevent="clearForm">CANCEL</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSetup',

  data () {
    return {
      user: {
        avatar: '',
        email: '',
        password: '',
        admin: true
      }
    }
  },
  methods: {
    addUser () {
      if ((this.user.email === '' || undefined) && (this.user.password === '' || undefined)) {
        console.log('Must have email and password')
        return
      }
      console.log(this.user)
      this.$router.push('/signin')
    },
    clearForm () {
      this.user.email = ''
      this.user.password = ''
      this.user.admin = true
    }
  }
}
</script>

<style lang="css" scoped>
</style>