/* jslint node: true */

'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'

import coins from './modules/coins'
import faucets from './modules/faucets'
import user from './modules/user'
import users from './modules/users'
import utility from './modules/utility'

Vue.use(Vuex)

// use modules

const store = new Vuex.Store({
  modules: {
    coins: coins,
    faucets: faucets,
    user: user,
    users: users,
    utility: utility
  },
  plugins: [createPersistedState({
    key: 'cryptolist',
    paths: ['user', 'users'],
    storage: {
      getItem: key => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: false }),
      removeItem: key => Cookies.remove(key)
    }
  })]
})

export default store
