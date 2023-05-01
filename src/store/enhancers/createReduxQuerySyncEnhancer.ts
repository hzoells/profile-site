import type {StoreEnhancer} from 'redux'
import {ReduxQuerySyncManager, ReduxQuerySyncParams} from './lib'

const REDUX_QUERY_SYNC_PARAMS: ReduxQuerySyncParams = {}

export const createReduxQuerySyncEnhancer =
  (): StoreEnhancer => createStore => (reducer, preloadedState) => {
    const store = createStore(reducer, preloadedState)

    // eslint-disable-next-line no-new
    new ReduxQuerySyncManager(REDUX_QUERY_SYNC_PARAMS, store)

    return store
  }
