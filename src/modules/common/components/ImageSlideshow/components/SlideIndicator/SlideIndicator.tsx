import React, {memo, useMemo} from 'react'

import {StyledDot, StyledRoot, StyledSelectedIndicator} from './SlideIndicator.styled'

export interface SlideIndicatorProps {
  className?: string
  slideCount: number
  selectedSlide: number
  setSlideIndex: (index: number) => void
}

export const SlideIndicator = (props: SlideIndicatorProps) => {
  const {slideCount, className, selectedSlide, setSlideIndex} = props

  const dots = useMemo(() => {
    const dotsArray = new Array<boolean>(slideCount).fill(false)

    dotsArray[selectedSlide] = true

    return (
      <>
        {dotsArray.map((isSelected, index) => (
          <StyledDot key={`${index}${isSelected}`} onClick={() => setSlideIndex(index)} />
        ))}
      </>
    )
  }, [slideCount, selectedSlide, setSlideIndex])

  return (
    <StyledRoot className={className}>
      {dots} <StyledSelectedIndicator selectedItem={selectedSlide} />{' '}
    </StyledRoot>
  )
}

export default memo(SlideIndicator)
