/* jslint node: true */

'use strict'

const state = {
  users: []
}

const getters = {
  users: state => {
    return state.users
  }
}

const mutations = {

}

const actions = {
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
