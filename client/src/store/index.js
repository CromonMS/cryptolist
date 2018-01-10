/* jslint node: true */

'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

import coins from './modules/coins'
import utility from './modules/utility'

Vue.use(Vuex)

// use modules

const store = new Vuex.Store({
  modules: {
    coins: coins,
    utility: utility
  }
})

export default store
