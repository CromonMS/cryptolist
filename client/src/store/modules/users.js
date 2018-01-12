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
  }
}

const actions = {
  loadPortfolio ({commit, dispatch}, payload) {
    loadPortfolio(payload).then((response) => {

    }).catch(error => {
      commit('utility/commitError', error)
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
