<template>
  <tbody class="table">
    <tr>
      <td>{{ coin.Coin.imageUrl || ''  }}</td>
      <td>{{ coin.Coin.name }}</td>
      <td>
        <span v-if="!showEditQuantity" @dblclick="showEditQuantity = !showEditQuantity" title="Double Click to Edit">
          {{ coin.quantity }}
        </span>
        <!-- <span v-else @keydown.enter="showEditQuantity = !showEditQuantity"> -->
        <span v-else @keydown.enter="updateCoin('quantity')">
          <div class="field has-addons">
            <div class="control is-expanded">
              <input class="input is-small" name="" v-model="coin.quantity">
            </div>
            <div class="control is-expanded">
              <button class="button is-success is-small" @click="updateCoin('quantity')">
                <i class="fa fa-check"></i>
              </button>
              <button class="button is-danger is-small" @click="showEditQuantity = !showEditQuantity">
                <i class="fa fa-times"></i>
              </button>
            </div>
          </div>
        </span>
      </td>
      <td class="is-info"><i class="fa fa-btc"></i> {{ btcPrice }}</td>
      <td>{{ ((coin.quantity * btcPrice) / totalPortfolioBtcValue) * 100 }}</td>
      <td class="is-success"><i class="fa fa-btc"></i> {{ coin.quantity * btcPrice }}</td>
      <td class="link has-text-centered" @click="showExtendedInfo = !showExtendedInfo">
        <a class="has-text-black" title="MORE INFO">
          <i class="fa fa-info" v-if="!showExtendedInfo"></i>
          <i class="fa fa-info-circle" v-else></i>
        </a>
      </td>
      <td class="link is-info has-text-centered" @click="editAllCoinDetails">
        <i class="is-danger fa fa-pencil" :class="{'fa-spin fa-spinner': editing}" title="EDIT"></i>
      </td>
      <td class="link is-danger has-text-centered" @click="removeCoinFromPortfolio">
        <i class="is-danger fa fa-minus" title="REMOVE"></i>
      </td>
    </tr>
    <tr v-if="showExtendedInfo">
      <td></td>
      <td><b>Address:</b></td>
      <td colspan="2" :class="{'is-success opaque': clicked === true}">
        <span v-if="!showEditAddress && coin.address === ''" @dblclick="showEditAddress = !showEditAddress" title="Double Click to Edit">
          Double Click to Edit
        </span>
        <span v-else-if="!showEditAddress" @dblclick="showEditAddress = !showEditAddress" title="Click to Copy, Dbl Click to Edit">
          <span v-if="coin.address.length <= 34">{{ coin.address }}</span>
          <span v-else>{{ coin.address.substring(0, 34).concat('..') }}</span>
          <i class="fa fa-clipboard link" @click="copyToClipboard"></i>
        </span>
        <span v-else @keydown.enter="updateCoin('address')">
          <div class="field has-addons">
            <div class="control is-expanded">
              <input class="input is-small" name="" v-model="coin.address">
            </div>
            <div class="control">
              <button class="button is-success is-small" @click="updateCoin('address')">
                <i class="fa fa-check"></i>
              </button>
              <button class="button is-danger is-small" @click="showEditAddress = !showEditAddress">
                <i class="fa fa-times"></i>
              </button>
            </div>
          </div>
        </span>
      </td>
      <td><b>Location:</b></td>
      <td colspan="2">
        <span v-if="!showEditLocation" @dblclick="showEditLocation = !showEditLocation" title="Double Click to Edit">
          {{ coin.location }}
        </span>
        <span v-else @keydown.enter="updateCoin('location')">
          <div class="field has-addons">
            <div class="control is-expanded">
              <input class="input is-small" name="" v-model="coin.location">
            </div>
            <div class="control">
              <button class="button is-success is-small" @click="updateCoin('location')">
                <i class="fa fa-check"></i>
              </button>
              <button class="button is-danger is-small" @click="showEditLocation = !showEditLocation">
                <i class="fa fa-times"></i>
              </button>
            </div>
          </div>
        </span>
      </td>
    </tr>
  </tbody>
</template>

<script>
// import axios from 'axios'
import { coinPrice } from '@/mixins/index'
export default {
  mixins: [coinPrice],
  name: 'PortfolioItem',
  props: {
    coin: {
      type: Object
    },
    portfolio: {
      type: Object
    },
    totalPortfolioBtcValue: {
      type: Number
    }
  },
  data () {
    return {
      btcPrice: null,
      showExtendedInfo: false,
      showEditQuantity: false,
      showEditAddress: false,
      showEditLocation: false,
      editing: false,
      clicked: false
    }
  },
  methods: {
    editQuantity () {

    },
    getCoinPrice () {
      this.coinPrice(this.coin.Coin.symbol).then(response => {
        this.btcPrice = response.data.BTC
      }).catch(error => {
        console.log('getcoin', error)
      })
    },
    updateCoin (close) {
      if (close === 'quantity') {
        this.showEditQuantity = false
      }
      if (close === 'address') {
        this.showEditAddress = false
      }
      if (close === 'location') {
        this.showEditLocation = false
      }
      if (close === undefined) {
        this.editing = false
      }
      this.$store.dispatch('user/updatePortfolioCoin', {endpoint: 'PortfolioCoins/', id: this.coin.id, record: this.coin})
    },
    editAllCoinDetails () {
      this.editing = !this.editing
      this.showExtendedInfo = !this.showExtendedInfo
      this.showEditQuantity = !this.showEditQuantity
      this.showEditAddress = !this.showEditAddress
      this.showEditLocation = !this.showEditLocation
    },
    removeCoinFromPortfolio () {
      console.log(this.coin.id)
    },
    copyToClipboard () {
      this.clicked = true
      this.$copyText(this.coin.address).then((e) => {
        console.log('Address Copied to Clipboard', e)
      }, (e) => {
        console.log(e)
      })
      console.log(this.coin.address)
      setTimeout(() => {
        this.clicked = false
      }, 200)
    }
  },
  created () {
    this.getCoinPrice()
  }
}
</script>

<style lang="css" scoped>
tr {
  border-bottom: 1px solid lightgrey;
}
.opaque {
  opacity: 0.4;
  transition: opacity 1.8s cubic-bezier(0.10, 0, 0.68, 1);
}

@keyframes copyFade {

}
</style>