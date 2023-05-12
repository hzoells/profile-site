import React, {memo} from 'react'

import {
  StyledItemContentContainer,
  StyledItemTitleContainer,
  StyledInfo,
  StyledRoot,
  StyledText,
  StyledTitleText,
} from './Cooking.styled'

export interface CookingProps {
  className?: string
}

export const Cooking = (props: CookingProps) => {
  const {className} = props

  return (
    <StyledRoot className={className} title='EDUCATION'>
      <StyledInfo>
        <StyledItemTitleContainer>
          <StyledTitleText variant='h6'>Columbia University {' (Graduated 2020)'}</StyledTitleText>
        </StyledItemTitleContainer>

        <StyledItemContentContainer>
          <StyledText>
            I majored in Physics, and I took several computer science courses including Operating
            Systems and Advanced Programming.
          </StyledText>
        </StyledItemContentContainer>
      </StyledInfo>
    </StyledRoot>
  )
}

export default memo(Cooking)
