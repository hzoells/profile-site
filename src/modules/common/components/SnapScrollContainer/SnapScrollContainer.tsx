import React, {
  Children,
  ReactNode,
  UIEvent,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import {StyledRoot, StyledScrollIndicator} from './SnapScrollContainer.styled'

export interface SnapScrollContainerProps {
  className?: string
  children?: ReactNode
}

export const SnapScrollContainer = (props: SnapScrollContainerProps) => {
  const {children, className} = props

  const numChildren = useMemo(() => Children.toArray(children).length, [children])

  const rootRef = useRef<HTMLDivElement | null>(null)

  const [selectedChild, setSelectedChild] = useState(0)

  const scrollListener = useCallback(
    (event: Event) => {
      const element = event.target as HTMLDivElement

      if (element) {
        setSelectedChild(Math.floor((element.scrollTop / element.scrollHeight) * numChildren))
      }
    },
    [numChildren]
  )

  useEffect(() => {
    if (rootRef.current) {
      const currentRoot = rootRef.current
      currentRoot.addEventListener('scroll', scrollListener)

      return () => {
        currentRoot.removeEventListener('scroll', scrollListener)
      }
    }
  }, [scrollListener])

  const scrollToChild = useCallback((childIndex: number) => {
    if (rootRef.current) {
      rootRef.current.scrollTo({
        top: rootRef.current.clientHeight * childIndex,
        behavior: 'smooth',
      })
    }
  }, [])

  return (
    <StyledRoot className={className} ref={rootRef}>
      {numChildren > 1 && (
        <StyledScrollIndicator
          childCount={numChildren}
          scrollToChild={scrollToChild}
          selectedChild={selectedChild}
        />
      )}

      {children}
    </StyledRoot>
  )
}

export default memo(SnapScrollContainer)
