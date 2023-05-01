import {CORE} from './common'

const createConstant = <Constant extends string>(constant: Constant) =>
  `${CORE}/${constant}` as const

export const TOGGLE_IS_SIDEBAR_OPEN = createConstant('TOGGLE_IS_SIDEBAR_OPEN')
