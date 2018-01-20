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
  posts: []
}

const getters = {
  posts: state => {
    return state.posts
  }
}

const mutations = {
  'LOAD_POSTS' (state, payload) {
    state.posts = payload
  },
  'ADD_NEW_POST' (state, payload) {
    state.posts.push(payload)
  },
  'UPDATE_POST' (state, payload) {
    state.posts[payload.id] = payload
  }
}

const actions = {
  loadPosts ({commit, dispatch}, payload) {
    getAllRecords(payload).then((response) => {
      commit('LOAD_POSTS', response.data)
    }).catch(error => {
      dispatch('utility/commitError', error.message, {root: true})
    })
  },
  addNewPost ({commit, dispatch}, payload) {
    addNewRecord(payload).then((response) => {
      commit('ADD_NEW_POST', response.data)
    }).catch(error => {
      dispatch('utility/commitError', error.message, {root: true})
    })
  },
  updatePost ({commit, dispatch}, payload) {
    updateRecord(payload).then((response) => {
      commit('UPDATE_POST', response.data)
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
