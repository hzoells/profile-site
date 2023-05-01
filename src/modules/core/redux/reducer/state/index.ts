import {combineReducers} from 'redux'

import {IsSidebarOpenState, isSidebarOpenReducer} from './isSidebarOpen'
import {ResponsiveState, responsiveReducer} from './responsive'

export interface StateState {
  isSidebarOpen: IsSidebarOpenState
  responsive: ResponsiveState
}

export type StatePersistedState = StateState

export const stateReducer = combineReducers<StateState>({
  isSidebarOpen: isSidebarOpenReducer,
  responsive: responsiveReducer,
})
