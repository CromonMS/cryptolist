<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <user-profile :user="user"></user-profile>
      </div>
    </div>
  </section>
</template>

<script>
import UserProfile from '@/components/Users/UserProfile'
export default {
  name: 'SignUp',
  components: {
    UserProfile
  },
  data () {
    return {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        dob: '',
        country: '',
        currency: '',
        newsletter: true,
        reportFrequency: '',
        emailVerified: true,
        Role: [
          {name: 'user'}
        ]
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>