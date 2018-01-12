/* jslint node: true */

'use strict'

import {
  loadPortfolio
  // logoutUser,
  // getUser
} from '../../api/api'

const state = {
  portfolio: null
}

const getters = {
  portfolio: state => {
    return state.portfolio
  }
}

const mutations = {
  'LOAD_PORTFOLIO' (state, payload) {
    state.portfolio = payload
  },
  'UNLOAD_PORTFOLIO' (state, payload) {
    state.portfolio = null
  }
}

const actions = {
  loadPortfolio ({commit, dispatch}, payload) {
    loadPortfolio(payload).then((response) => {
      console.log(response)
      commit('LOAD_PORTFOLIO', response.data)
    }).catch(error => {
      commit('utility/commitError', error)
    })
  },
  unloadPortfolio ({commit}) {
    commit('UNLOAD_PORTFOLIO')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
