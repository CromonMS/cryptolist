<template>
  <div class="container">
    <div class="content">
      POSTS LIST
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