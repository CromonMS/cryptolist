/* jslint node: true */

'use strict'

import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'
import News from '@/components/News'

import AdminDashboard from '@/components/Admin/AdminDashboard'
import CoinAdmin from '@/components/Admin/CoinAdmin'
import ExchangeAdmin from '@/components/Admin/ExchangeAdmin'
import FaucetAdmin from '@/components/Admin/FaucetAdmin'
import NewsAdmin from '@/components/Admin/NewsAdmin'
import UserAdmin from '@/components/Admin/UserAdmin'

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
      path: '/admin/dashboard',
      name: 'AdminDashboard',
      component: AdminDashboard
    },
    {
      path: '/admin/coins',
      name: 'CoinAdmin',
      component: CoinAdmin
    },
    {
      path: '/admin/exchanges',
      name: 'ExchangeAdmin',
      component: ExchangeAdmin
    },
    {
      path: '/admin/faucets',
      name: 'FaucetAdmin',
      component: FaucetAdmin
    },
    {
      path: '/admin/news',
      name: 'NewsAdmin',
      component: NewsAdmin
    },
    {
      path: '/admin/users',
      name: 'UserAdmin',
      component: UserAdmin
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
