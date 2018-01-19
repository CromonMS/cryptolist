<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <h2 class="title">User Profile</h2>
        <div class="container">
          <div class="columns">
            <div class="column is-half">
              <h4 class="subtitle">General Settings</h4>
              <div class="field">
                <label class="label">Username</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Username" v-model="user.username">
                </div>
              </div>
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Email" v-model="user.email">
                </div>
              </div>
              <div class="field">
                <label class="label">First Name</label>
                <div class="control">
                  <input class="input" type="text" placeholder="First Name" v-model="user.firstName">
                </div>
              </div>
              <div class="field">
                <label class="label">Last Name</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Last Name" v-model="user.lastName">
                </div>
              </div>
              <div class="field">
                <label class="label">D.O.B.</label>
                <div class="control">
                  <input class="input" type="date" placeholder="D.O.B." v-model="user.dob">
                </div>
              </div>
              <div class="field">
                <label class="label">Country</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Country" v-model="user.country">
                </div>
              </div>
              <div class="field">
                <label class="label">Currency</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Currency" v-model="user.currency">
                </div>
              </div>
            </div>
            <div class="column">
              <h4 class="subtitle">Mail Settings</h4>
              <div class="field">
                <label class="checkbox">
                  <input type="checkbox" v-model="user.newsletter">
                  Newsletter
                </label>
              </div>
              <div class="field">
                <label class="label">Report</label>
                <div class="select">
                  <select name="report" v-model="user.reportFrequency">
                    <option selected="selected" value="">Never</option>
                    <option value="day">Daily</option>
                    <option value="week">Weekly</option>
                    <option value="month">Monthly</option>
                  </select>
                </div>                
              </div>
            </div>
          </div>
          <div class="field">
            <button class="button is-success" type="" @click="updateUser">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UserProfile',
  props: {
    user: {
      type: Object
    }
  },
  data () {
    return {

    }
  },
  methods: {
    updateUser () {
      console.log('user', this.user)
    }
  }
}
</script>

<style lang="css" scoped>
</style>