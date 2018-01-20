<template>
  <div class="content is-bordered">
    <h3>Add New Exchange</h3>
    <div class="field">
      <div class="field-body">
        <div class="field">
          <div class="control">
            <label class="label">Name</label>
            <input class="input" type="text" name="name" placeholder="Exchange Name" v-model="newExchange.name">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="label">URL</label>
            <input class="input" type="text" name="name" placeholder="Exchange URL" v-model="newExchange.url">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="label">Trading Pairs</label>
            <input class="input" type="text" name="name" placeholder="Exchange Trading Pairs" v-model="newExchange.tradingPairs">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="label">Location</label>
            <input class="input" type="text" name="name" placeholder="Exchange Location" v-model="newExchange.location">
          </div>
        </div>
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
  name: 'NewExchange',
  data () {
    return {
      newExchange: {
        name: '',
        url: '',
        tradingPairs: 0,
        location: ''
      }
    }
  },
  methods: {
    addNewFaucet () {
      let newExchange = this.newExchange
      this.$store.dispatch('exchanges/addNewExchange', {endpoint: 'Exchanges', record: newExchange})
      // this.newExchange = {
      //   name: '',
      //   url: '',
      //   tradingPairs: 0,
      //   location: ''
      // }
      console.log(this.newExchange)
    }
  }
}
</script>

<style lang="css" scoped>
</style>