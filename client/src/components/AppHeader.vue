<template>
  <nav class="navbar is-dark has-shadow" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" title="Crypto List" href="#/">Crypto List</a>
        <button class="button navbar-burger is-dark" data-target="navBarMain">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div id="navBarMain" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item is-dashboard" href="#/user/dashboard" v-if="loggedIn">Dashboard</a>
          <a class="navbar-item" href="#/news">News</a>
          <a class="navbar-item" href="#/coins">Coin List</a>
          <a class="navbar-item" href="#/exchanges">Exchanges</a>
          <a class="navbar-item" href="#/faucets">Faucets</a>
          <!-- <a class="navbar-item" href="#/portfolio">Portfolio</a> -->
          <hr class="navbar-divider">
          <span class="navbar-item">Total Marketcap - {{ marketcap }} <a @click="updateMarketCap" class="icon has-text-white"><i class="fa fa-refresh" :class="{'fa-spin': this.marketcap == 'updating'}" aria-hidden="true"></i></a></span>
        </div>
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable" v-if="loggedIn && user.Role[0].name === 'admin'">
            <a class="navbar-link is-active">Admin</a>
            <div class="navbar-dropdown">
              <a class="navbar-item is-admin-dashboard" href="#/admin/dashboard">Dashboard</a>
              <a class="navbar-item" href="#/admin/news">News Admin</a>
              <a class="navbar-item" href="#/admin/users">User Admin</a>
              <a class="navbar-item" href="#/admin/coins">Coin Admin</a>
              <a class="navbar-item" href="#/admin/exchanges">Exchange Admin</a>
              <a class="navbar-item" href="#/admin/faucets">Faucet Admin</a>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link is-active">User</a>
            <div class="navbar-dropdown" v-if="!loggedIn">
              <a class="navbar-item" href="#/signup">Sign Up</a>
              <a class="navbar-item" href="#/signin">Sign In</a>
            </div>
            <div class="navbar-dropdown" v-else>
              <a class="navbar-item" @click="logoutUser">Sign Out</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from 'axios'
import accounting from 'accounting'

export default {
  name: 'AppHeader',
  props: {
    loggedIn: {
      type: Boolean,
      required: true
    },
    user: {
      type: Object
    }
  },
  data () {
    return {
      marketcap: '',
      symbol: '£',
      lastUpdated: Date.now()
    }
  },
  methods: {
    updateMarketCap () {
      let currentUpdateTime = this.lastUpdated
      let currentTime = Date.now()
      if (currentUpdateTime + 10000 > currentTime) {
        console.log('too soon')
      } else {
        this.getMarketCap()
      }
    },
    getMarketCap () {
      this.lastUpdated = Date.now()
      this.marketcap = 'updating'
      console.log('getting marketcap')
      let api = 'https://api.coinmarketcap.com/v1/global/?convert=GBP'
      axios.get(api).then((response) => {
        let marketcap = accounting.formatMoney(response.data.total_market_cap_gbp, {symbol: this.symbol})
        this.marketcap = marketcap
      }).catch(error => {
        console.log(error)
      })
    },
    logoutUser () {
      this.$store.dispatch('user/logoutUser', {root: true})
    }
  },
  created () {
    this.getMarketCap()
    document.addEventListener('DOMContentLoaded', () => {
      var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

      if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', function () {
            var target = $el.dataset.target
            var $target = document.getElementById(target)

            $el.classList.toggle('is-active')
            $target.classList.toggle('is-active')
          })
        })
      }
    })
  }
}
</script>

<style lang="css" scoped>
.is-dashboard {
  color: #c09!important;
}
.is-admin-dashboard {
  color: #0f9!important;
  /*background-color: red;*/
}
</style>