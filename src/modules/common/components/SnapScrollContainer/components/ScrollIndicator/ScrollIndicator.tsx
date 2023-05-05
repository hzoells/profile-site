import React, {memo, useMemo} from 'react'

import {StyledDot, StyledRoot, StyledSelectedIndicator} from './ScrollIndicator.styled'

export interface ScrollIndicatorProps {
  className?: string
  childCount: number
  selectedChild: number
  scrollToChild: (child: number) => void
}

export const ScrollIndicator = (props: ScrollIndicatorProps) => {
  const {childCount, className, selectedChild, scrollToChild} = props

  const dots = useMemo(() => {
    const dotsArray = new Array<boolean>(childCount).fill(false)

    dotsArray[selectedChild] = true

    return (
      <>
        {dotsArray.map((isSelected, index) => (
          <StyledDot key={`${index}${isSelected}`} onClick={() => scrollToChild(index)} />
        ))}
      </>
    )
  }, [childCount, selectedChild, scrollToChild])

  return (
    <StyledRoot className={className}>
      {dots} <StyledSelectedIndicator selectedItem={selectedChild} />{' '}
    </StyledRoot>
  )
}

export default memo(ScrollIndicator)
