import {useCallback, useEffect, useRef} from 'react'

import type {AnyFunction} from 'lib/types'

export const useTimeout = (callback: AnyFunction, delay: number) => {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const delayRef = useRef(delay)

  useEffect(() => {
    delayRef.current = delay
  }, [delay])

  const startRef = useRef(Date.now())
  const timeoutIdRef = useRef<number>()

  const start = useCallback(() => {
    if (callbackRef.current) {
      startRef.current = Date.now()
      timeoutIdRef.current = setTimeout(callbackRef.current, delayRef.current)
    }
  }, [])

  const pause = useCallback(() => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current)
    }

    delayRef.current -= Date.now() - startRef.current
  }, [])

  const stop = useCallback(() => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current)
    }

    delayRef.current = delay
  }, [delay])

  // Stop on unmount
  useEffect(
    () => () => {
      stop()
    },
    [stop]
  )

  return {pause, start, stop}
}
