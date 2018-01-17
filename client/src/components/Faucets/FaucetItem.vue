<template>
  <tbody class="table">
    <tr>
      <td>
        <span v-if="editing"><input class="input is-small" type="text" name="name" v-model="faucet.name"></span>
        <span v-else>{{ faucet.name }}</span>
      </td>
      <td v-if="isAdmin" :title="faucet.url">
        <span v-if="editing"><input class="input is-small" type="text" name="name" v-model="faucet.url"></span>
        <span v-else-if="faucet.url.length <= 34">{{ faucet.url }}</span>
        <span v-else>{{ faucet.url.substring(0, 26).concat('..') }}</span>
      </td>
      <td class="is-info">
        <span v-if="editing"><input class="input is-small" type="text" name="name" v-model="faucet.timer"></span>        
        <span v-else>
          <i class="fa fa-clock-o"></i>
          {{ faucet.timer }}
        </span>
      </td>
      <td class="is-success">
        <span v-if="editing"><input class="input is-small" type="text" name="name" v-model="faucet.reward"></span>
        <span v-else>
          <i v-if="faucet.coin === 'BTC'" class="fa fa-btc"></i>
          <i v-else class="fa fa-money"></i>
          {{ faucet.reward }}
        </span>
      </td>
      <td>
        <span v-if="editing"><input class="input is-small" type="text" name="name" v-model="faucet.coin"></span>
        <span v-else>
          <i v-if="faucet.coin === 'BTC'" class="fa fa-btc"></i>
          {{ faucet.coin }}
        </span>
      </td>
      <td class="has-text-centered">
        <span v-if="editing">
          <div class="select is-small">
            <select v-model="faucet.active">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </span>
        <span v-else><i class="fa" :class="{'fa-check': faucet.active === 'true' | true, 'fa-cross': faucet.active === 'false' | false}"></i></span>
      </td>
      <td class="is-link">
        <a class="button is-link is-size-7" :href="faucet.url" :title="faucet.name" target="_blank" :name="faucet.name">Visit</a>
      </td>
      <td v-if="isAdmin" class="link is-info has-text-centered" @click="editing = !editing">
        <i v-if="editing" class=""></i>
        <i class="is-danger fa fa-pencil" :class="{'fa-spin fa-spinner': editing}" title="EDIT"></i>
      </td>
      <td v-if="isAdmin" class="link has-text-centered" :class="{'is-success': editing, 'is-danger': !editing}">
        <i v-if="editing" class="fa fa-check is-success" @click="updateFaucet"></i>
        <i v-else class="is-danger fa fa-minus" title="REMOVE"></i>
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
  },
  methods: {
    updateFaucet () {
      this.editing = false
      this.$store.dispatch('faucets/updateFaucet', {endpoint: 'Faucets/', id: this.faucet.id, record: this.faucet})
    }
  }
}
</script>

<style lang="css" scoped>
</style>