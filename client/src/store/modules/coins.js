/* jslint node: true */

'use strict'

import {
  getAllRecords,
  getRecord
  // searchRecords,
  // createNewRecord,
  // updateRecord,
  // deleteRecord,
  // deleteRecords
} from '../../api/api'

const state = {
  coins: [],
  newCoin: {}
}

const getters = {
  coins: state => {
    return state.coins
  }
}

const mutations = {
  'LOAD_COINS' (state, payload) {
    state.coins = payload
  }
}

const actions = {
  loadCoins ({commit, dispatch}, payload) {
    getAllRecords(payload).then(response => {
      commit('LOAD_COINS', response.data)
    }, error => {
      dispatch('utility/commitError', error.body, {root: true})
    })
  },
  loadCoin ({commit, dispatch}) {
    getRecord().then(response => {
      commit('LOAD_COIN', response.data)
    }, error => {
      dispatch('utility/commitError', error.body, {root: true})
    })
  },
  populateCoins ({commit, dispatch}) {
    console.log('populate')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
