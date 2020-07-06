import * as types from './types'

let initialState = {
    loading: true,
    users: null,
    err: '',

}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_FETCH_LOADING:
            return {
                ...state,
                loading: true
            }
        case types.USER_FETCH_SUCCEEDED:
            return {
                ...state,
                loading: false,
                users: action.payload.data,
            }
        case types.USER_FETCH_FAILED:
            return {
                ...state,
                loading: false,
                err: action.err,
            }
        default:
            return state
    }
}
