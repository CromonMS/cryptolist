<template>
  <div class="container">
    <portfolio-list :user="user"></portfolio-list>
  </div>
</template>

<script>
import PortfolioList from './PortfolioList'
export default {
  name: 'UserPortfolio',
  components: {
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

    }
  }
}
</script>

<style lang="css" scoped>
</style>