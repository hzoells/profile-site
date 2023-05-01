import {CORE} from 'lib/constants'

import type {Store as StoreBase} from 'redux'
import type {ThunkDispatch} from 'redux-thunk'

import {CoreActions} from 'modules/core/redux/actions'
import type {CoreState} from 'modules/core/redux/reducer'

export type Actions = CoreActions

export interface State {
  [CORE]: CoreState
}

export type Dispatch = ThunkDispatch<State, any, Actions>

export interface Store extends StoreBase<State, Actions> {
  dispatch: Dispatch
}
