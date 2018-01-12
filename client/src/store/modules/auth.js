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
      let userId = response.data.userId
      let accessToken = response.data.id
      commit('SET_AUTHORISATION_TOKEN', accessToken)
      dispatch('auth/loadUser', {endpoint: 'Users/', id: userId, accessToken: accessToken}, {root: true})
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
  loadUser ({commit, dispatch}, payload) {
    getUser(payload).then((response) => {
      commit('LOAD_USER', response.data)
      commit('SET_LOGGED_IN')
      // eventbus.$emit('successfullLogin', {})
    }).catch(error => {
      dispatch('utility/commitError', error.message, {root: true})
    })
  },
  forgotPassword ({commit, dispatch}, payload) {
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
