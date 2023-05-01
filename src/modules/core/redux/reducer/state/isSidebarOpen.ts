import {TOGGLE_IS_SIDEBAR_OPEN} from 'lib/constants'

import {produce} from 'immer'

import {Reducer} from 'redux'
import {Actions} from 'store/types'

export type IsSidebarOpenState = boolean

const defaultIsSidebarOpen: IsSidebarOpenState = false

export const isSidebarOpenReducer: Reducer<IsSidebarOpenState, Actions> = (
  state = defaultIsSidebarOpen,
  action
) =>
  produce(state, () => {
    switch (action.type) {
      case TOGGLE_IS_SIDEBAR_OPEN: {
        const {
          payload: {isSidebarOpen},
        } = action

        return isSidebarOpen
      }
    }
  })
