/* jslint node: true */

'use strict'

import {
  getAllRecords,
  addNewRecord,
  updateRecord
  // getRecord
  // searchRecords,
  // deleteRecord,
  // deleteRecords
} from '../../api/api'

const state = {
  faucets: []
}

const getters = {
  faucets: state => {
    return state.faucets
  }
}

const mutations = {
  'LOAD_FAUCETS' (state, payload) {
    state.faucets = payload
  },
  'ADD_NEW_FAUCET' (state, payload) {
    state.faucets.push(payload)
  },
  'UPDATE_FAUCET' (state, payload) {
    state.faucets[payload.id] = payload
  }
}

const actions = {
  loadFaucets ({commit, dispatch}, payload) {
    getAllRecords(payload).then(response => {
      commit('LOAD_FAUCETS', response.data)
    }, error => {
      dispatch('utility/commitError', error.message, {root: true})
    })
  },
  loadFaucet ({commit, dispatch}, payload) {
  },
  addNewFaucet ({commit, dispatch}, payload) {
    addNewRecord(payload).then(response => {
      console.log('resp', response)
      commit('ADD_NEW_FAUCET', response.data)
    }).catch(error => {
      dispatch('utility/commitError', error.message, {root: true})
    })
  },
  updateFaucet ({commit, dispatch}, payload) {
    updateRecord(payload).then((response) => {
      commit('UPDATE_FAUCET', response.data)
      console.log(response)
    }).catch(error => {
      console.log(error)
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
