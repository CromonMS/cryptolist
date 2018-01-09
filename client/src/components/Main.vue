<template>
  <section class="section">
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
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Welcome to CryptoList'
    }
  }
}
</script>

<style scoped>
</style>
