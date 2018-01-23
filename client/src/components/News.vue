<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <h2>News</h2>
        <posts-list :posts="posts" :user="user" :isAdmin="isAdmin"></posts-list>
      </div>
    </div>
  </section>
</template>

<script>
import { isAdmin } from '@/mixins/'
import PostsList from '@/components/NewsPosts/NewsPostList'
export default {
  mixins: [isAdmin],
  name: 'News',
  components: {
    PostsList
  },
  props: {
    user: {
      type: Object
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