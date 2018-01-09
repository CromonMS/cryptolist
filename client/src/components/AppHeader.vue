<template>
  <nav class="navbar is-dark has-shadow" role="navigation" aria-label="main navigation">
    <div id="specialShadow" class="bd-special-shadow"></div>
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
          <a class="navbar-item" href="#/news">News</a>
          <a class="navbar-item" href="#/coins">Coin List</a>
          <a class="navbar-item" href="#/exchanges">Exchanges</a>
          <!-- <a class="navbar-item" href="#/portfolio">Portfolio</a> -->
          <hr class="navbar-divider">
          <span class="navbar-item">Total Marketcap - {{ marketcap }} <a @click="updateMarketCap" class="icon has-text-white"><i class="fa fa-refresh" :class="{'fa-spin': this.marketcap == 'updating'}" aria-hidden="true"></i></a></span>
        </div>
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link is-active">Users</a>
            <div class="navbar-dropdown">
              <a class="navbar-item" href="#/signup">Sign Up</a>
              <a class="navbar-item" href="#/signin">Sign In</a>
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
</style>