/* jslint node: true */

'use strict'

import axios from 'axios'
import { API_URL } from './base'

export const getAllRecords = (payload) => {
  return axios.get(API_URL + payload.endpoint)
}

export const getRecord = (payload) => {
  return axios.get(API_URL + payload.endpoint + payload.id)
}

export const updateRecord = (payload) => {
  return axios.patch(API_URL + payload.endpoint + payload.id + '?access_token=' + payload.accessToken, payload.record)
}

export const addNewRecord = (payload) => {
  return axios.post(API_URL + payload.endpoint, payload.record)
}

export const deleteRecord = (payload) => {
  return axios.delete(API_URL + payload.endpoint + payload.id)
}

// Members specific methods
export const loginUser = (payload) => {
  return axios.post(API_URL + 'Members/login', {email: payload.user.email, password: payload.user.password, username: payload.user.username})
}

export const logoutUser = (payload) => {
  return axios.post(API_URL + 'Members/logout' + '?access_token=' + payload)
}

export const getUser = (payload) => {
  return axios.get(API_URL + payload.endpoint + payload.id + '?access_token=' + payload.accessToken)
}

// Coins specific Methods
export const populateCoins = () => {
  return axios.post(API_URL + 'populate/' + {doit: true})
}

// Portfolio Methods

export const loadPortfolio = (payload) => {
  return axios.get(API_URL + 'Portfolios/findOne/?MemberId=' + payload.memberId, {'filter': {'include': 'PortfolioCoins'}})
}

export const addNewAsset = (payload) => {
  return axios.post(API_URL + 'Portfolios/' + payload.portfolioId + '/PortfolioCoins', payload.asset)
}
