/* jslint node: true */

'use strict'

import {
  getAllRecords
  // addNewRecord,
  // updateRecord
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
  }

}

const actions = {
  loadPosts ({commit, dispatch}, payload) {
    getAllRecords(payload).then(response => {
      commit('LOAD_POSTS', response.data)
    }, error => {
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
