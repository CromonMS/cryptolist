<template>
  <div class="content table-wrapper">
    <table class="table is-narrow is-hoverable">
      <thead>
        <tr>
          <th>Name</th>
          <th v-if="isAdmin">URL</th>
          <th>Timer</th>
          <th>Reward</th>
          <th>Coin</th>
          <th>Active</th>
          <th>VISIT</th>
          <th v-if="isAdmin" colspan="2">Actions</th>
        </tr>
      </thead>
      <faucet-item v-for="(faucet, index) in faucets" :faucet="faucet" :key="index" :user="user" :isAdmin="isAdmin"></faucet-item>
    </table>
  </div>
</template>

<script>
import FaucetItem from './FaucetItem'
export default {
  name: 'FaucetList',
  components: {
    FaucetItem
  },
  props: {
    faucets: {
      type: Array,
      required: true
    },
    user: {
      type: Object
    },
    isAdmin: {
      type: Boolean
    }
  }
}
</script>

<style lang="css" scoped>
</style>