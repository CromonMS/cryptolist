<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <h2>News Posts Admin</h2>
        <button class="button is-link" @click.prevent="newPost = !newPost">
          <span v-if="!newPost">ADD NEW</span>
          <span v-if="newPost">CLOSE</span>
        </button>        
      </div>
      <div class="content">
        <div v-if="newPost">
          <new-post></new-post>    
        </div>
      </div>
      <div class="content">
        <posts-list :posts="posts" :user="user" :isAdmin="isAdmin"></posts-list>
      </div>      
    </div>
  </section>
</template>

<script>
import PostsList from './NewsPosts/NewsPostList'
export default {
  name: 'NewsAdmin',
  components: {
    PostsList
  },
  props: {
    user: {
      type: Object
    },
    isAdmin: {
      type: Boolean
    }
  },
  data () {
    return {
      newPost: false
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