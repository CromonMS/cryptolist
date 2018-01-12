/* jslint node: true */

'use strict'

import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'
import News from '@/components/News'

import AdminIndex from '@/components/Admin/AdminIndex'
import FaucetAdmin from '@/components/Admin/FaucetAdmin'

import CoinListIndex from '@/components/CoinList/CoinListIndex'
import ExchangesIndex from '@/components/Exchanges/ExchangesIndex'
import FaucetsIndex from '@/components/Faucets/FaucetsIndex'
import SignIn from '@/components/Users/SignIn'
import SignUp from '@/components/Users/SignUp'
import UserDashboard from '@/components/Users/UserDashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/admin',
      name: 'AdminIndex',
      components: {
        default: AdminIndex,
        faucets: FaucetAdmin
      }
    },
    {
      path: '/admin/faucets',
      name: 'FaucetAdmin',
      component: FaucetAdmin
    },
    {
      path: '/user/dashboard',
      name: 'UserDashboard',
      component: UserDashboard
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/coins',
      name: 'CoinListIndex',
      component: CoinListIndex
    },
    {
      path: '/exchanges',
      name: 'ExchangesIndex',
      component: ExchangesIndex
    },
    {
      path: '/faucets',
      name: 'FaucetsIndex',
      component: FaucetsIndex
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
