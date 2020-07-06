import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { usersReducer } from './users'
import mySaga from './sagas'

const rootReducer = combineReducers({
    usersReducer
});

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga)
window.store = store
