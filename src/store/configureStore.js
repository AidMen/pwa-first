import {
  createStore,
  applyMiddleware
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {
  createLogger
} from 'redux-logger'

import rootReducer from '../reducers'

import {
  routerMiddleware
} from 'react-router-redux'


const loggerMiddleware = createLogger()
// Configuring the Store. PreloadState is the initial State.
export const configureStore = (preloadedState, history) => {
  return createStore(
    rootReducer,
    preloadedState,

    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      routerMiddleware(history),
    )
  )
}