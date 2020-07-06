import * as types from './types.js'

export const userFetchRequest = (payload) => ({ type: types.USER_FETCH_REQUESTED, payload })
export const userFetchSucceded = (payload) => ({ type: types.USER_FETCH_SUCCEEDED, payload })
export const userFetchFailed = (err) => ({ type: types.USER_FETCH_FAILED, err })
export const userFetchLoading = (payload) => ({ type: types.USER_FETCH_LOADING, payload })
