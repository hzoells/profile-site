import {applyMiddleware, StoreEnhancer, compose, createStore as createStoreBase} from 'redux'
import {createReduxQuerySyncEnhancer} from './enhancers'
import {middleware} from './middleware'
import {reducer} from './reducer'

import type {State, Store} from './types'

export const createStore = (initialState?: Partial<State>) => {
  const reduxQuerySyncEnhancer = createReduxQuerySyncEnhancer()
  const middlewareEnhancer = applyMiddleware(...middleware)

  const storeEnhancers = [reduxQuerySyncEnhancer, middlewareEnhancer]
  const composedEnhancers = compose(...storeEnhancers) as StoreEnhancer

  return createStoreBase(reducer, initialState as any, composedEnhancers) as Store
}
