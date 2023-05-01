import type {Ref} from 'react'

import {isFunction} from 'lib/types'

export const setRef = <T>(ref: Ref<T>, value: T | null) => {
  if (isFunction(ref)) {
    ref(value)
  } else if (ref) {
    // @ts-ignore
    ref.current = value
  }
}
