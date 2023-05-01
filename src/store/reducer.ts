import {CORE} from 'lib/constants'

import {combineReducers} from 'redux'
import {coreReducer} from 'modules/core/redux/reducer'

import type {State} from './types'

export const reducer = combineReducers<State>({
  [CORE]: coreReducer,
})
