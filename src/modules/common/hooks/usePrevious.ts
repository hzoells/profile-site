import {useEffect, useRef} from 'react'

export const usePrevious = <T>(value: T): T | null => {
  const previousValueRef = useRef<T | null>(null)

  useEffect(() => {
    previousValueRef.current = value
  })

  return previousValueRef.current
}
