/* jslint node: true */

'use strict'

import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'
import News from '@/components/News'

// Admin Components
import AdminDashboard from '@/components/Admin/AdminDashboard'
import CoinAdmin from '@/components/Admin/CoinAdmin'
import ExchangeAdmin from '@/components/Admin/ExchangeAdmin'
import FaucetAdmin from '@/components/Admin/FaucetAdmin'
import NewsPostAdmin from '@/components/Admin/NewsPostAdmin'
import UserAdmin from '@/components/Admin/UserAdmin'

// User Componenets
import UserPortfolio from '@/components/Users/UserPortfolio'
import UserDashboard from '@/components/Users/UserDashboard'

// Public Components
import CoinsIndex from '@/components/Coins/CoinsIndex'
import ExchangesIndex from '@/components/Exchanges/ExchangesIndex'
import FaucetsIndex from '@/components/Faucets/FaucetsIndex'
import SignIn from '@/components/Users/SignIn'
import SignUp from '@/components/Users/SignUp'

// Pages
import Contact from '@/components/Pages/Contact'
import Faq from '@/components/Pages/Faq'
import PrivacyPolicy from '@/components/Pages/PrivacyPolicy'
import Terms from '@/components/Pages/Terms'

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
      name: 'NewsPostAdmin',
      component: NewsPostAdmin
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
      path: '/user/portfolio',
      name: 'UserPortfolio',
      component: UserPortfolio
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/coins',
      name: 'CoinsIndex',
      component: CoinsIndex
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
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/privacy_policy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicy
    },
    {
      path: '/terms',
      name: 'Terms',
      component: Terms
    }
  ]
})
