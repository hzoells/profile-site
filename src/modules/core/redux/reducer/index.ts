import {combineReducers} from 'redux'

import {StatePersistedState, stateReducer} from './state'

export interface CoreState {
  state: StatePersistedState
}

export const coreReducer = combineReducers<CoreState>({
  state: stateReducer,
})
