/* jslint node: true */

'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'

import coins from './modules/coins'
import exchanges from './modules/exchanges'
import faucets from './modules/faucets'
import posts from './modules/posts'
import user from './modules/user'
import utility from './modules/utility'

Vue.use(Vuex)

// use modules

const store = new Vuex.Store({
  modules: {
    coins: coins,
    exchanges: exchanges,
    faucets: faucets,
    posts: posts,
    user: user,
    utility: utility
  },
  plugins:
  // Put user portfolio into localStorage
  [createPersistedState({
    key: 'cl_portfolio',
    paths: ['user.user.Portfolio'],
    subscriber: store => handler => store.subscribe(handler)
  }),
    // Put user access info ino a cookie
    createPersistedState({
      key: 'cl_user',
      paths: ['user.user.Role', 'user.accessToken', 'user.loggedIn'],
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: false }),
        removeItem: key => Cookies.remove(key)
      }
    })]
})

export default store
