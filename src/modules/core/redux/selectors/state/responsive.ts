import {CORE} from 'lib/constants'

import {createSelector} from 'reselect'

import type {State} from 'store/types'

export const getResponsive = (state: State) => state[CORE].state.responsive

export const getIsDesktop = createSelector([getResponsive], responsive => responsive.desktop)

export const getIsMobile = createSelector([getResponsive], responsive => responsive.mobile)

export const getIsPhone = createSelector([getResponsive], responsive => responsive.phone)
