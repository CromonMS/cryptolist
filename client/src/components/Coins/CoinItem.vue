<template>
  <tbody>
    <tr>
      <td>{{ coin.rank }}</td>
      <td>{{ coin.name }}</td>
      <td>{{ coin.symbol }}</td>
      <td>{{ coin.totalCoins }}</td>
      <td>{{ coin.algorithm }}</td>
      <td><button class="button is-small is-info" disabled>VIEW</button></td>
    </tr>
  </tbody>  
</template>

<script>
export default {
  name: 'CoinItem',
  props: {
    coin: {
      type: Object
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