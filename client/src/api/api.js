/* jslint node: true */

'use strict'

import axios from 'axios'
const API_URL = '0.0.0.0:5000'

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
  const obj = new Object
  obj[payload.model] = payload.record
  console.log('api', payload)
  return axios.post(API_URL + payload.endpoint, obj)
}
