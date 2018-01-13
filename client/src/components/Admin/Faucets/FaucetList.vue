<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>URL</th>
          <th>Reward</th>
          <th>Timer</th>
          <th>Coin</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(faucet, index) in faucets">
          <td>{{ faucet.name }}</td>
          <td>{{ faucet.url }}</td>
          <td>{{ faucet.reward }}</td>
          <td>{{ faucet.timer }}</td>
          <td>{{ faucet.coin }}</td>
          <td>{{ faucet.active ? 'Yes' : 'No' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'FaucetList',
  props: {
    faucets: {
      type: Array,
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