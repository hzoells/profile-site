import {useCallback} from 'react'
import {useDispatch} from 'react-redux'

import {AnyFunction} from 'lib/types'

export const useAction = <Action extends AnyFunction>(action: Action): Action => {
  const dispatch = useDispatch<Action>()

  return useCallback(
    (...args: any[]) => {
      dispatch(action(...args))
    },
    [action, dispatch]
  ) as Action
}
