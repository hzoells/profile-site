import {CORE} from 'lib/constants'

import type {State} from 'store/types'

export const getIsSidebarOpen = (state: State) => state[CORE].state.isSidebarOpen
