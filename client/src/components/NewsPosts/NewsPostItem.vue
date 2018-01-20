<template>
  <article class="message is-info">
    <div class="message-header">
      {{ post.title }}
      <div class="field is-grouped is-pulled-right">
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-success">{{ post.tag }}</span>
            <span class="tag is-warning">{{ new Date(post.date).toISOString().slice(0,10) }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="message-body">
      {{ post.body }}
    </div>
    <div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'NewsPostItem',
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