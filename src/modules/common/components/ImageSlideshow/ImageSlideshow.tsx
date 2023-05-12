import React, {memo, useCallback, useState} from 'react'

import {
  StyledBackButton,
  StyledChevronLeft,
  StyledChevronRight,
  StyledForwardButton,
  StyledImage,
  StyledImageHolder,
  StyledRoot,
  StyledSlide,
  StyledSlideIndicator,
  StyledSlidesContainer,
} from './ImageSlideshow.styled'

export interface SlideInfo {
  imageSrc: string
  slideTitle?: string
}

export interface ImageSlideshowProps {
  className?: string
  slides: SlideInfo[]
}

export const ImageSlideshow = (props: ImageSlideshowProps) => {
  const {className, slides} = props

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const handleBackClick = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1)
    }
  }, [currentSlideIndex])

  const handleForwardClick = useCallback(() => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1)
    }
  }, [slides.length, currentSlideIndex])

  if (slides.length === 0) return null

  return (
    <StyledRoot className={className}>
      <StyledSlidesContainer>
        {slides.map((slide, index) => (
          <StyledSlide
            isCurrentSlide={currentSlideIndex === index}
            key={`${slide.imageSrc},${index}`}
          >
            <StyledImageHolder>
              <StyledImage alt={slide.slideTitle || ''} src={slide.imageSrc} />
            </StyledImageHolder>
          </StyledSlide>
        ))}

        <StyledBackButton isDisabled={currentSlideIndex === 0} onClick={handleBackClick}>
          <StyledChevronLeft />
        </StyledBackButton>

        <StyledForwardButton
          isDisabled={currentSlideIndex === slides.length - 1}
          onClick={handleForwardClick}
        >
          <StyledChevronRight />
        </StyledForwardButton>
      </StyledSlidesContainer>

      <StyledSlideIndicator
        selectedSlide={currentSlideIndex}
        setSlideIndex={setCurrentSlideIndex}
        slideCount={slides.length}
      />
    </StyledRoot>
  )
}

export default memo(ImageSlideshow)
