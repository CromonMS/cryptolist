<template>
  <div id="is-bordered" class="content">
    <h3>Add New Post</h3>
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <div class="control">
            <label class="label">Date</label>
            <input class="input" type="date" name="date" v-model="newPost.date">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="label">Title</label>
            <input class="input" type="text" name="title" placeholder="Post Title" v-model="newPost.title">
          </div>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <div class="control">
            <label class="label">Body</label>
            <textarea class="textarea" type="textarea" name="body" placeholder="Post Body" v-model="newPost.body"></textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <div class="control">
            <label class="label">Tag</label>
            <input class="input" type="text" name="tag" placeholder="Post Tag" v-model="newPost.tag">
          </div>
        </div>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <label class="label">Archived</label>
        <input type="checkbox" name="archived" placeholder="Post Archived" v-model="newPost.archived" checked>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button is-danger" @click.prevent="addNewPost">SUBMIT</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewPost',
  data () {
    return {
      newPost: {
        date: new Date().toISOString().slice(0, 10),
        title: '',
        body: '',
        archived: false,
        tag: ''
      }
    }
  },
  methods: {
    addNewPost () {
      let newPost = this.newPost
      this.$store.dispatch('posts/addNewPost', {endpoint: 'Posts', record: newPost}, {root: true})
      console.log(this.newPost)
    }
  }
}
</script>

<style lang="css" scoped>
#is-bordered {
  border: 1px solid #f09;
  border-radius: 10px;
  padding: 0.5rem;
  }
</style>