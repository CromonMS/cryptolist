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

export const createNewRecord = (payload) => {
  // send in payload.model (model name) # User
  // send in payload.record (new record) # newUser
  // send in payload.endpoint (api endpoint) # Members
  const obj = {}
  obj[payload.model] = payload.record
  console.log('api', payload)
  return axios.post(API_URL + payload.endpoint, obj)
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

export const loadPortfolio = (payload) => {
  return axios.get(API_URL + 'Portfolios/findOne/?ownerId=' + payload.ownerId, {'filter': {'include': 'coins'}})
}
