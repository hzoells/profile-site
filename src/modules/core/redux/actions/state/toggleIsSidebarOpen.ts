import {TOGGLE_IS_SIDEBAR_OPEN} from 'lib/constants'

import {getIsSidebarOpen} from 'modules/core/redux/selectors'

import {ThunkAction} from 'redux-thunk'
import {StandardAction, isUndefined} from 'lib/types'
import type {State} from 'store/types'

interface ToggleIsSidebarOpenPayload {
  isSidebarOpen: boolean
}

export type ToggleIsSidebarOpenAction = StandardAction<
  typeof TOGGLE_IS_SIDEBAR_OPEN,
  ToggleIsSidebarOpenPayload
>

export const toggleIsSidebarOpen =
  (isSidebarOpen?: boolean): ThunkAction<void, State, undefined, ToggleIsSidebarOpenAction> =>
  async (dispatch, getState) => {
    if (isSidebarOpen === getIsSidebarOpen(getState())) {
      return
    }

    if (isUndefined(isSidebarOpen)) {
      isSidebarOpen = !getIsSidebarOpen(getState())
    }

    await dispatch({
      type: TOGGLE_IS_SIDEBAR_OPEN,
      payload: {isSidebarOpen},
    })
  }
