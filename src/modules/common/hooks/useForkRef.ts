import {Ref, useMemo} from 'react'

import {setRef} from 'modules/common/helpers'

import {isNull} from 'lib/types'

export const useForkRef = <T>(...refs: Ref<T>[]) =>
  useMemo(() => {
    if (refs.every(ref => isNull(ref))) {
      return null
    }

    return (refValue => {
      refs.forEach(ref => {
        setRef(ref, refValue)
      })
    }) as Ref<T>
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs)
