import {TypedUseSelectorHook, useSelector as useSelectorBase} from 'react-redux'
import type {State} from 'store/types'

export const useSelector = useSelectorBase as TypedUseSelectorHook<State>
