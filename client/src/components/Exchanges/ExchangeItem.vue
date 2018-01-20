<template>
  <tbody>
    <tr>
      <td>
        <span v-if="editing"><input class="input is-small" type="text" name="name" v-model="exchange.name"></span>
        <span v-else>{{ exchange.name }}</span>
      </td>
      <td v-if="isAdmin" :title="exchange.url">
        <span v-if="editing"><input class="input is-small" type="text" name="name" v-model="exchange.url"></span>
        <span v-else-if="exchange.url.length <= 34">{{ exchange.url }}</span>
        <span v-else>{{ exchange.url.substring(0, 26).concat('..') }}</span>
      </td>
      <td>
        <span v-if="editing"><input class="input is-small" type="text" name="name" v-model="exchange.tradingPairs"></span>                
        <span v-else class="tag is-success">
          {{ exchange.tradingPairs }}
        </span>
      </td>
      <td>{{ exchange.location }}</td>
      <td></td>
      <td>
        <a class="tag button is-link is-size-7" :href="exchange.url" :title="exchange.name" target="_blank" :name="exchange.name">Visit</a>
      </td>
      <td v-if="isAdmin" @click="editing = !editing">
        <span class="tag button is-info">
          <i class="fa fa-pencil" :class="{'fa-spin fa-spinner': editing}" title="EDIT"></i>
        </span>
      </td>
      <td v-if="isAdmin">
        <span class="tag button" :class="{'is-success': editing, 'is-danger': !editing}">
          <i v-if="editing" class="fa fa-check" @click="updateExchange"></i>
          <i v-else class="fa fa-minus" title="REMOVE"></i>
        </span>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'ExchangeItem',
  props: {
    exchange: {
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
      editing: false
    }
  },
  methods: {
    updateExchange () {
      console.log(this.exchange)
    }
  }
}
</script>

<style lang="css" scoped>
</style>