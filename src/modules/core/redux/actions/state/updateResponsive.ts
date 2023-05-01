import {SET_MOBILE_DETECT, setMobileDetect} from 'react-responsive-redux'

import isEqual from 'lodash/isEqual'
import {getNewResponsiveState} from 'modules/core/helpers'

import {getResponsive} from 'modules/core/redux/selectors'

import {ThunkAction} from 'redux-thunk'
import {StandardAction} from 'lib/types'
import type {State} from 'store/types'
import {PageContext} from 'modules/common/types'

export type UpdateResponsiveAction = StandardAction<typeof SET_MOBILE_DETECT>

export const updateResponsive =
  (
    context: PageContext | undefined,
    isServer: boolean
  ): ThunkAction<void, State, undefined, UpdateResponsiveAction> =>
  (dispatch, getState) => {
    // Don't include fakeWidth in comparison, since it's only generated once server-side
    const {fakeWidth, ...oldResponsive} = getResponsive(getState())
    const newResponsive = getNewResponsiveState(context, isServer)

    if (isEqual(oldResponsive, newResponsive)) {
      return
    }

    dispatch({
      ...setMobileDetect(newResponsive),
    })
  }
