<template>
  <div id="is-bordered" class="content">
    <h3>Add New Faucet</h3>
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <div class="control">
            <label class="label">Name</label>
            <input class="input" type="text" name="name" placeholder="Faucet Name" v-model="newFaucet.name">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="label">URL</label>
            <input class="input" type="text" name="name" placeholder="Faucet URL" v-model="newFaucet.url">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="label">Reward</label>
            <input class="input" type="text" name="name" placeholder="Faucet Reward" v-model="newFaucet.reward">
          </div>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <div class="control">
            <label class="label">Timer</label>
            <input class="input" type="text" name="name" placeholder="Faucet Timer" v-model="newFaucet.timer">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="label">Coin</label>
            <input class="input" type="text" name="name" placeholder="Faucet URL" v-model="newFaucet.coin">
          </div>
        </div>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <label class="label">Active</label>
        <input type="checkbox" name="name" placeholder="Faucet Reward" v-model="newFaucet.active" checked>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button is-danger" @click.prevent="addNewFaucet">SUBMIT</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewFaucet',
  data () {
    return {
      newFaucet: {
        name: '',
        url: '',
        reward: '',
        timer: '',
        coin: '',
        active: true
      }
    }
  },
  methods: {
    addNewFaucet () {
      let newFaucet = this.newFaucet
      this.$store.dispatch('faucets/addNewFaucet', {endpoint: 'Faucets', record: newFaucet})
      // this.newFaucet = {
      //   name: '',
      //   url: '',
      //   reward: '',
      //   timer: '',
      //   coin: '',
      //   active: true
      // }
      console.log(this.newFaucet)
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