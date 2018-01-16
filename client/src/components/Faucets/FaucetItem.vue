<template>
  <tbody class="table">
    <tr>
      <td>{{ faucet.name }}</td>
      <td v-if="isAdmin" :title="faucet.url">
        <span v-if="faucet.url.length <= 34">{{ faucet.url }}</span>
        <span v-else>{{ faucet.url.substring(0, 34).concat('..') }}</span>
      </td>
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
      <td class="has-text-centered"><i class="fa" :class="{'fa-check': faucet.active, 'fa-cross': !faucet.active}"></i></td>
      <td class="is-link"><a class="button is-link is-size-7" :href="faucet.url" :title="faucet.name" target="_blank" :name="faucet.name">Visit</a></td>
      <td v-if="isAdmin" class="link is-info has-text-centered" @click="">
        <i class="is-danger fa fa-pencil" :class="{'fa-spin fa-spinner': editing}" title="EDIT"></i>
      </td>
      </td>
      <td v-if="isAdmin" class="link is-danger has-text-centered">
        <i class="is-danger fa fa-minus" title="REMOVE"></i>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'FaucetItem',
  props: {
    faucet: {
      type: Object
    },
    user: {
      type: Object
    },
    isAdmin: {
      type: Boolean
    }
  },
  data () {
    return {
      editing: false,
      clicked: false
    }
  }
}
</script>

<style lang="css" scoped>
</style>