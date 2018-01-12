/* jslint node: true */

'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import coins from './modules/coins'
import users from './modules/users'
import utility from './modules/utility'

Vue.use(Vuex)

// use modules

const store = new Vuex.Store({
  modules: {
    auth: auth,
    coins: coins,
    users: users,
    utility: utility
  }
})

export default store
