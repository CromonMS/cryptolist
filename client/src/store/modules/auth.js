/* jslint node: true */

'use strict'

// import { eventbus } from '@/eventbus'

import {
  getUser,
  loginUser,
  logoutUser
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
  }
}

const actions = {
  loginUser ({commit, dispatch}, payload) {
    loginUser(payload).then((response) => {
      const userId = response.data.userId
      const accessToken = response.data.id
      commit('SET_AUTHORISATION_TOKEN', accessToken)
      dispatch('auth/loadUser', {endpoint: 'Members/', id: userId, accessToken: accessToken}, {root: true})
    }).catch(error => {
      dispatch('utility/commitError', error.message, {root: true})
    })
    console.log(payload)
  },
  logoutUser ({commit, dispatch, getters}) {
    const accessToken = getters['accessToken']
    logoutUser(accessToken).then((response) => {
      commit('SET_LOGGED_OUT', accessToken)
      dispatch('users/unloadPortfolio', {}, {root: true})
      this.$router.push('/')
    }).catch(error => {
      console.log(error)
      dispatch('utility/commitError', error.message, {root: true})
    })
  },
  loadUser ({commit, dispatch, getters}, payload) {
    getUser(payload).then((response) => {
      const accessToken = getters['auth/accessToken']
      console.log('loadUser', response)
      commit('LOAD_USER', response.data)
      commit('SET_LOGGED_IN')
      dispatch('users/loadPortfolio', {memberId: response.data.id, accessToken: accessToken}, {root: true})
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
