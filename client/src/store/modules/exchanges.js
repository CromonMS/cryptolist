/* jslint node: true */

'use strict'

import {
  getAllRecords,
  getRecord,
  addNewRecord,
  updateRecord
  // searchRecords,
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
  },
  'ADD_NEW_EXCHANGE' (state, payload) {
    state.exchanges.push(payload)
  },
  'UPDATE_EXCHANGE' (state, payload) {
    state.exchanges[payload.id] = payload
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
  loadExchange ({commit, dispatch}, payload) {
    getRecord(payload).then(response => {
      commit('LOAD_EXCHANGE', response.data)
    }, error => {
      dispatch('utility/commitError', error.body, {root: true})
    })
  },
  populateExchanges ({commit, dispatch}) {
    console.log('populate')
  },
  addNewExchange ({commit, dispatch}, payload) {
    addNewRecord(payload).then(response => {
      commit('ADD_NEW_EXCHANGE', response.data)
    }).catch(error => {
      dispatch('utility/commitError', error.message, {root: true})
    })
  },
  updateFaucet ({commit, dispatch}, payload) {
    updateRecord(payload).then((response) => {
      commit('UPDATE_EXCHANGE', response.data)
    }).catch(error => {
      dispatch('utility/commitError', error.message, {root: true})
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
