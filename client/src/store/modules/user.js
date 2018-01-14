/* jslint node: true */

'use strict'

// import { eventbus } from '@/eventbus'

import {
  getUser,
  loginUser,
  logoutUser,
  addNewRecord,
  updateRecord,
  deleteRecord
} from '../../api/api'

const state = {
  accessToken: null,
  user: null,
  loggedIn: false
}

const getters = {
  accessToken: state => {
    return state.accessToken
  },
  user: state => {
    return state.user
  },
  loggedIn: state => {
    return state.loggedIn
  }
}

const mutations = {
  'SET_AUTHORISATION_TOKEN' (state, payload) {
    state.accessToken = payload
  },
  'LOAD_USER' (state, payload) {
    state.user = payload
  },
  'SET_LOGGED_IN' (state) {
    state.loggedIn = true
  },
  'SET_LOGGED_OUT' (state) {
    state.loggedIn = false
    state.user = null
    state.accessToken = null
  },
  'ADD_COIN_TO_PORTFOIO' (state, payload) {
    state.user.Portfolio[0].PortfolioCoins.push(payload)
  },
  'UPDATE_USER_PROFILE' (state, payload) {
    state.user.Portfolio[0].PortfolioCoins[payload.id] = payload
  }
}

const actions = {
  loginUser ({commit, dispatch}, payload) {
    loginUser(payload).then((response) => {
      const userId = response.data.userId
      const accessToken = response.data.id
      commit('SET_AUTHORISATION_TOKEN', accessToken)
      dispatch('user/loadUser', {endpoint: 'Members/', id: userId, accessToken: accessToken}, {root: true})
    }).catch(error => {
      dispatch('utility/commitError', error.message, {root: true})
    })
    console.log(payload)
  },
  logoutUser ({commit, dispatch, getters}) {
    const accessToken = getters['accessToken']
    logoutUser(accessToken).then((response) => {
      commit('SET_LOGGED_OUT', accessToken)
      this.$router.push('/')
    }).catch(error => {
      console.log(error)
      dispatch('utility/commitError', error.message, {root: true})
    })
  },
  loadUser ({commit, dispatch, getters}, payload) {
    getUser(payload).then((response) => {
      // const accessToken = getters['user/accessToken']
      console.log('loadUser', response)
      commit('LOAD_USER', response.data)
      commit('SET_LOGGED_IN')
      // dispatch('users/loadPortfolio', {memberId: response.data.id, accessToken: accessToken}, {root: true})
    }).catch(error => {
      dispatch('utility/commitError', error.message, {root: true})
    })
  },
  forgotPassword ({commit, dispatch}, payload) {
  },
  signUpUser ({commit, dispatch}, payload) {
    // createUser(payload).then((response) => {
    //   commit('')
    // })
  },
  addCoinToPortfolio ({commit, dispatch}, payload) {
    addNewRecord(payload).then((response) => {
      console.log(response)
      commit('UPDATE_USER_PROFILE', response.data)
      commit('ADD_COIN_TO_PORTFOIO', response.data)
    }).catch(error => {
      console.log(error)
    })
  },
  updatePortfolioCoin ({commit, dispatch}, payload) {
    updateRecord(payload).then((response) => {
      commit('UPDATE_USER_PROFILE', response.data)
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  },
  deletePortfolioCoin ({commit, dispatch}, payload) {
    deleteRecord(payload).then((response) => {
      console.log(response)
      commit('DELETE_COIN_FROM_PORTFOLIO')
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
