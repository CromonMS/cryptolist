<template>
  <div class="content">
    <table class="table is-narrow is-hoverable">
      <thead>
        <tr>
          <th>Name</th>
          <th v-if="user && user.Role[0].name === 'admin'">URL</th>
          <th>Timer</th>
          <th>Reward</th>
          <th>Coin</th>
          <th>Active</th>
          <th>VISIT</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(faucet, index) in faucets">
          <td>{{ faucet.name }}</td>
          <td v-if="user && user.Role[0].name === 'admin'">{{ faucet.url }}</td>
          <td class="is-info"><i class="fa fa-clock-o"></i> {{ faucet.timer }}</td>
          <td class="is-success">
            <i v-if="faucet.coin === 'BTC'" class="fa fa-btc"></i>
            <i v-else class="fa fa-money"></i>
            {{ faucet.reward }}
          </td>
          <td>
            <i v-if="faucet.coin === 'BTC'" class="fa fa-btc"></i>
            {{ faucet.coin }}
          </td>
          <td><i class="fa" :class="{'fa-check': faucet.active, 'fa-cross': !faucet.active}"></i></td>
          <td class="is-link"><a class="button is-link is-size-7" :href="faucet.url" :title="faucet.name" target="_blank" :name="faucet.name">Visit</a></td>
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
    },
    user: {
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