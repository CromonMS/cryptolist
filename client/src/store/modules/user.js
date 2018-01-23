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
  'UPDATE_USER' (state, payload) {
    state.user = payload
  },
  'ADD_COIN_TO_PORTFOIO' (state, payload) {
    state.user.Portfolio[0].PortfolioCoins.push(payload)
  },
  'UPDATE_USER_PORTFOLIO_COIN' (state, payload) {
    state.user.Portfolio[0].PortfolioCoins[payload.id] = payload
  },
  'DELETE_COIN_FROM_PORTFOLIO' (state, payload) {
    let index = state.user.Portfolio[0].PortfolioCoins.indexOf(payload)
    state.user.Portfolio[0].PortfolioCoins.splice(index, 1)
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
  },
  logoutUser ({commit, dispatch, getters}) {
    const accessToken = getters['accessToken']
    logoutUser(accessToken).then((response) => {
      commit('SET_LOGGED_OUT', accessToken)
      dispatch('utility/commitError', 'Successfully Logged Out', {root: true})
    }).catch(error => {
      console.log(error)
      dispatch('utility/commitError', error.message, {root: true})
    })
  },
  loadUser ({commit, dispatch}, payload) {
    getUser(payload).then((response) => {
      console.log('loadUser', response)
      commit('LOAD_USER', response.data)
      commit('SET_LOGGED_IN')
      dispatch('utility/commitNotification', 'Successfully Logged In', {root: true})
    }).catch(error => {
      dispatch('utility/commitError', error.message, {root: true})
    })
  },
  forgotPassword ({commit, dispatch}, payload) {
  },
  signUpUser ({commit, dispatch}, payload) {
    addNewRecord(payload).then((response) => {
      console.log('newUser', response.data)
      dispatch('loginUser', {user: response.data})
      dispatch('utility/commitNotification', 'Successfully Signed Up', {root: true})
    }).catch(error => {
      dispatch('utility/commitError', error.message, {root: true})
    })
  },
  updateUser ({commit, dispatch, getters}, payload) {
    let accessToken = getters['accessToken']
    payload.accessToken = accessToken
    updateRecord(payload).then((response) => {
      console.log('user', payload)
      commit('UPDATE_USER', response.data)
    }).catch(error => {
      dispatch('utility/commitError', error.message, {root: true})
    })
  },
  addCoinToPortfolio ({commit, dispatch}, payload) {
    addNewRecord(payload).then((response) => {
      console.log(response)
      response.data.Coin = payload.record.Coin
      commit('ADD_COIN_TO_PORTFOIO', response.data)
    }).catch(error => {
      dispatch('utility/commitError', error.message, {root: true})
    })
  },
  updatePortfolioCoin ({commit, dispatch}, payload) {
    updateRecord(payload).then((response) => {
      commit('UPDATE_USER_PORTFOLIO_COIN', response.data)
      console.log(response)
    }).catch(error => {
      dispatch('utility/commitError', error.message, {root: true})
    })
  },
  deletePortfolioCoin ({commit, dispatch}, payload) {
    deleteRecord(payload).then((response) => {
      console.log(response)
      commit('DELETE_COIN_FROM_PORTFOLIO', payload.record)
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
