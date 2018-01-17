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
  exchanges: []
}

const getters = {
  exchanges: state => {
    return state.exchanges
  },
  exchange (state) {
    return (exchangeId) => {
      return state.exchanges[exchangeId]
    }
  }
}

const mutations = {
  'LOAD_EXCHANGES' (state, payload) {
    state.exchanges = payload
  }
}

const actions = {
  loadExchanges ({commit, dispatch}, payload) {
    dispatch('utility/setLoading', {}, {root: true})
    getAllRecords(payload).then(response => {
      commit('LOAD_EXCHANGES', response.data)
      dispatch('utility/clearLoading', {}, {root: true})
    }, error => {
      dispatch('utility/commitError', error.body, {root: true})
    })
  },
  loadExchange ({commit, dispatch}) {
    getRecord().then(response => {
      commit('LOAD_EXCHANGE', response.data)
    }, error => {
      dispatch('utility/commitError', error.body, {root: true})
    })
  },
  populateExchanges ({commit, dispatch}) {
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
