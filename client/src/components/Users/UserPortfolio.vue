<template>
  <section class="section">
    <div class="container">
      <h2 class="title">Your Portfolio</h2>
      <div class="content">
        <button class="button is-info" @click="showNew = !showNew">
          <span v-if="!showNew">ADD NEW ASSET</span>
          <span v-else>CLOSE</span>
        </button>
      </div>
      <div class="content">
        <new-asset v-if="showNew"></new-asset>
      </div>
      <div class="content">
        <portfolio-list :user="user"></portfolio-list>
      </div>
    </div>
  </section>
</template>

<script>
import NewAsset from './Portfolio/NewAsset'
import PortfolioList from './Portfolio/PortfolioList'
export default {
  name: 'UserPortfolio',
  components: {
    NewAsset,
    PortfolioList
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showNew: false
    }
  }
}
</script>

<style lang="css" scoped>
</style>