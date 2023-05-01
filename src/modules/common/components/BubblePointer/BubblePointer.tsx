import React, {memo} from 'react'

import {BUBBLE_POINTER_HEIGHT, BUBBLE_POINTER_WIDTH} from './constants'

import {StyledRoot} from './BubblePointer.styled'

export interface BubblePointerProps {
  className?: string
}

export function BubblePointer(props: BubblePointerProps) {
  const {className} = props

  return (
    <StyledRoot
      className={className}
      viewBox={`0 0 ${BUBBLE_POINTER_WIDTH} ${BUBBLE_POINTER_HEIGHT}`}
    >
      <path d='M12.2667 15.2L24 24V0L12.2667 8.8C10.1333 10.4 10.1333 13.6 12.2667 15.2Z' />
    </StyledRoot>
  )
}

export default memo(BubblePointer)
