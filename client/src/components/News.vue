<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <h2>News</h2>
        <news-post v-for="(post, index) in posts" :key="index"></news-post>
      </div>
    </div>
  </section>
</template>

<script>
import NewsPostList from '@/components/NewsPosts/NewsPostList'
export default {
  components: {
    NewsPostList
  },
  name: 'News',
  data () {
    return {

    }
  },
  computed: {
    posts () {
      return this.$store.getters['posts/posts']
    }
  }
}
</script>

<style lang="css" scoped>
</style>