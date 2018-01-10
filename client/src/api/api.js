/* jslint node: true */

'use strict'

import axios from 'axios'
import { API_URL } from './base'

export const getAllRecords = (payload) => {
  return axios.get(API_URL + payload.endpoint)
}

export const getRecord = (payload) => {
  return axios.get(API_URL + payload.endpoint + payload.record.id)
}

export const createNewRecord = (payload) => {
  // send in payload.model (model name) # User
  // send in payload.record (new record) # newUser
  // send in payload.endpoint (api endpoint) # Users
  const obj = {}
  obj[payload.model] = payload.record
  console.log('api', payload)
  return axios.post(API_URL + payload.endpoint, obj)
}

export const populateCoins = () => {
  return axios.post(API_URL + '/populate/' + {doit: true})
}
