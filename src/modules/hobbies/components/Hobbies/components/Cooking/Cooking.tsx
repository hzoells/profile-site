import React, {memo} from 'react'

import {PAGE_IMAGES_PATH} from 'modules/core/constants'

import {SlideInfo} from 'modules/common/components/ImageSlideshow'

import {
  StyledImageSlideshow,
  StyledItemContentContainer,
  StyledItemTitleContainer,
  StyledInfo,
  StyledRoot,
  StyledText,
  StyledTitleText,
} from './Cooking.styled'

const SLIDES: SlideInfo[] = [
  {
    imageSrc: `${PAGE_IMAGES_PATH}/food/pizza1.jpeg`,
  },
  {
    imageSrc: `${PAGE_IMAGES_PATH}/food/cake.jpeg`,
  },
  {
    imageSrc: `${PAGE_IMAGES_PATH}/food/blackforest.jpeg`,
  },
  {
    imageSrc: `${PAGE_IMAGES_PATH}/food/salmon.jpeg`,
  },
  {
    imageSrc: `${PAGE_IMAGES_PATH}/food/chicken.jpeg`,
  },
  {
    imageSrc: `${PAGE_IMAGES_PATH}/food/turkey.jpeg`,
  },
  {
    imageSrc: `${PAGE_IMAGES_PATH}/food/pizza2.jpeg`,
  },
  {
    imageSrc: `${PAGE_IMAGES_PATH}/food/bread.jpeg`,
  },
  {
    imageSrc: `${PAGE_IMAGES_PATH}/food/pizza3.jpeg`,
  },
]

export interface CookingProps {
  className?: string
}

export const Cooking = (props: CookingProps) => {
  const {className} = props

  return (
    <StyledRoot className={className} title='COOKING'>
      <StyledInfo>
        <StyledItemTitleContainer>
          <StyledTitleText variant='h6'>Cooking</StyledTitleText>
        </StyledItemTitleContainer>

        <StyledItemContentContainer>
          <StyledText>
            I have enjoyed cooking from a young age. Both of my grandmothers brought me into their
            kitchens and I developed an interest while helping them prepare family meals. Now my
            culinary interests include french cuisine, fermentation, and knife care.
          </StyledText>
        </StyledItemContentContainer>

        <StyledImageSlideshow slides={SLIDES} />
      </StyledInfo>
    </StyledRoot>
  )
}

export default memo(Cooking)
