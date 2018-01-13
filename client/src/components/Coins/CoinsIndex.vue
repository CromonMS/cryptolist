<template>
  <section class="section">
    <div class="container">
      Total Listed Coins {{ coins.length }}
      <table class="table">
        <caption class="title">Coins List</caption>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Total Coins</th>
            <th>Algorithm</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(coin, index) in sortedCoins">
            <td>{{ coin.rank }}</td>
            <td>{{ coin.name }}</td>
            <td>{{ coin.symbol }}</td>
            <td>{{ coin.totalCoins }}</td>
            <td>{{ coin.algorithm }}</td>
            <td><button class="button is-small is-info" disabled>VIEW</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CoinListIndex',
  data () {
    return {

    }
  },
  computed: {
    coins () {
      return this.$store.getters['coins/coins']
    },
    sortedCoins () {
      return this.coins.sort((a, b) => { return a.rank - b.rank })
    }
  }
}
</script>

<style lang="css" scoped>
</style>