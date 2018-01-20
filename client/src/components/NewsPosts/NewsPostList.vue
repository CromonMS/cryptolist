<template>

</template>

<script>
import NewsPostItem from './NewsPostItem'
export default {
  name: 'NewsPost',
  components: {
    NewsPostItem
  },
  props: {
    post: {
      type: Object
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