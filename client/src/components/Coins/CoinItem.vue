<template>
  <tbody>
    <tr>
      <!-- <td>{{ coin.imageURL }}</td> -->
      <td></td>
      <td>{{ coin.rank }}</td>
      <td>{{ coin.name }}</td>
      <td>{{ coin.symbol }}</td>
      <td>
        <span class="tag is-success" v-if="coin.totalCoins">{{ coin.totalCoins }}</span>
        <span v-else>{{ coin.totalCoins }}</span>
      </td>
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
      editing: false
    }
  }
}
</script>

<style lang="css" scoped>
</style>