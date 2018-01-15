<template>
  <section class="section">
<!--     <div class="container" v-if="users === undefined || users.length < 1">
      <app-setup></app-setup>
    </div> -->
    <!-- <div class="container" v-else> -->
    <div class="container">
      <div class="title">
        {{ msg }}
      </div>
      <div class="subtitle">
        Your personal Crypto currency and asset portfolio tracker
      </div>
    </div>
  </section>
</template>

<script>
import AppSetup from '@/components/Admin/AppSetup'
export default {
  name: 'Main',
  components: {
    AppSetup
  },
  data () {
    return {
      msg: 'Welcome to CryptoList'
    }
  },
  computed: {
    users () {
      return this.$store.getters['users/users']
    }
  }
}
</script>

<style scoped>
</style>
