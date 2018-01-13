/* jslint node: true */

'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'

import auth from './modules/auth'
import coins from './modules/coins'
import faucets from './modules/faucets'
import users from './modules/users'
import utility from './modules/utility'

Vue.use(Vuex)

// use modules

const store = new Vuex.Store({
  modules: {
    auth: auth,
    coins: coins,
    faucets: faucets,
    users: users,
    utility: utility
  },
  plugins: [createPersistedState({
    key: 'cryptolist',
    paths: ['auth', 'users'],
    storage: {
      getItem: key => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: false }),
      removeItem: key => Cookies.remove(key)
    }
  })]
})

export default store
