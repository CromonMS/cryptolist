<template>
  <div class="container">
    <div class="content">
      <news-post-item v-for="(post, index) in posts" :post="post" :key="index"></news-post-item>
    </div>
  </div>
</template>

<script>
import NewsPostItem from './NewsPostItem'
export default {
  name: 'NewsPost',
  components: {
    NewsPostItem
  },
  props: {
    posts: {
      type: Array
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