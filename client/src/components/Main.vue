<template>
  <section class="section">
    <div class="container">
      <section class="hero">
        <img src="http://via.placeholder.com/1700x400">
      </section>
    </div>
    <div class="container">
      <div class="content">
        <div class="title">
          {{ msg }}
        </div>
        <div class="subtitle">
          Your personal Crypto currency and asset portfolio tracker
        </div>
      </div>
      <div class="content">
        <news-post-item :post="posts[posts.length -1]"></news-post-item>
      </div>
    </div>
  </section>
</template>

<script>
import NewsPostItem from '@/components/NewsPosts/NewsPostItem'
export default {
  name: 'Main',
  components: {
    NewsPostItem
  },
  data () {
    return {
      msg: 'Welcome to CryptoList'
    }
  },
  computed: {
    posts () {
      return this.$store.getters['posts/posts']
    }
  }
}
</script>

<style scoped>
</style>
