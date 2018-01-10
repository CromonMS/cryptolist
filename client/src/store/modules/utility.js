/* jslint node: true */

'use strict'

const state = {
  notification: '',
  errors: [],
  loading: false,
  pagination: {
    page: '',
    per_page: '',
    total_pages: ''
  }
}

const getters = {
  errors: state => {
    return state.errors
  },
  notification: state => {
    return state.notification
  },
  loading: state => {
    return state.loading
  },
  pagination: state => {
    return state.pagination
  }
}

const mutations = {
  'COMMIT_ERRORS' (state, payload) {
    state.errors = payload
  },
  'COMMIT_ERROR' (state, payload) {
    state.errors.push(payload)
  },
  'CLEAR_ERRORS' (state) {
    state.errors = []
  },
  'CLEAR_NOTIFICATION' (state) {
    state.notification = ''
  },
  'SET_LOADING' (state) {
    state.loading = true
  },
  'CLEAR_LOADING' (state) {
    state.loading = false
  },
  'INCREMENT_PAGE' (state) {
    return state.pagination.page + 1
  },
  'DECREMENT_PAGE' (state) {
    return state.pagination.page - 1
  }
}

const actions = {
  commitErrors ({commit}, payload) {
    commit('COMMIT_ERRORS', payload)
  },
  commitError ({commit}, payload) {
    commit('COMMIT_ERROR', payload)
  },
  clearErrors ({commit}) {
    commit('CLEAR_ERRORS')
  },
  clearNotification ({commit}) {
    commit('CLEAR_NOTIFICATION')
  },
  setLoading ({commit}) {
    commit('SET_LOADING')
  },
  clearLoading ({commit}) {
    commit('CLEAR_LOADING')
  },
  incrementPage ({commit, dipatch}) {
    if (state.pagination.page === state.pagination.total_pages) {
      // dispatch('utility/commitError', 'Curently on last page')
    } else {
      commit('INCREMENT_PAGE')
    }
  },
  decrementPage ({commit, dispatch}) {
    if (state.pagination.page === 1) {
      dispatch('utility/commitError', 'Curently on first page')
    } else {
      commit('DECREMENT_PAGE')
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
