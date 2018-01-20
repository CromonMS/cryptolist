<template>
  <div class="container">
    <div class="content">
      <div id="is-bordered" class="content">
        <h3>Add New Asset</h3>
        <div class="field">
          <div class="control">
            <label class="label">Select Asset</label>
            <v-select v-model="newAsset.Coin" :options="coins" label="name"></v-select> <span v-if="newAsset.Coin">{{ newAsset.Coin.symbol }}</span>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <div class="control">
                <label class="label">Amount</label>
                <input class="input" type="text" placeholder="Asset Amount" v-model="newAsset.quantity">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="label">Date</label>
                <input class="input" type="date" placeholder="Asset Date" v-model="newAsset.date">
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <div class="control">
                <label class="label">Address</label>
                <input class="input" type="text" placeholder="Asset Address" v-model="newAsset.address">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="label">Location</label>
                <input class="input" type="text" placeholder="Asset Location" v-model="newAsset.location">
              </div>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-danger" @click.prevent="addNewAsset">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select'
export default {
  name: 'NewAsset',
  components: {
    vSelect
  },
  props: {
    user: {
      type: Object
    }
  },
  data () {
    return {
      newAsset: {
        Coin: null,
        quantity: '',
        address: '',
        location: '',
        date: new Date().toISOString().slice(0, 10),
        portfolioId: this.user.Portfolio[0].id
      }
    }
  },
  methods: {
    addNewAsset () {
      this.$store.dispatch('user/addCoinToPortfolio', {endpoint: 'PortfolioCoins/', record: this.newAsset}, {root: true})
    }
  },
  computed: {
    coins () {
      return this.$store.getters['coins/coins']
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

/*.dropdown, .v-select, input.form-control {
  min-width: 100%;
  max-width: 100%;
}
.dropdown-toggle {
  width: 100%;
}*/
</style>