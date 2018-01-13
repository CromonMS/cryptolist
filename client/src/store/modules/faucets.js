/* jslint node: true */

'use strict'

import {
  getAllRecords,
  createNewRecord
  // getRecord
  // searchRecords,
  // updateRecord,
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
  }
}

const actions = {
  loadFaucets ({commit, dispatch}, payload) {
    getAllRecords(payload).then(response => {
      commit('LOAD_FAUCETS', response.data)
    }, error => {
      dispatch('utility/commitError', error.body, {root: true})
    })
  },
  loadFaucet ({commit, dispatch}, payload) {
  },
  addNewFaucet ({commit, dispatch}, payload) {
    createNewRecord(payload).then(response => {
      console.log('resp', response)
      commit('ADD_NEW_FAUCET', response.data)
    }).catch(error => {
      dispatch('utility/commitError', error.body, {root: true})
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
