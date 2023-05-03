import React, {memo} from 'react'

import {colors} from 'lib/ui/styles'

import {StyledInfo, StyledRoot, StyledText, StyledTitle, StyledTitleText} from './About.styled'

export interface AboutProps {
  className?: string
}

export const About = (props: AboutProps) => {
  const {className} = props

  return (
    <StyledRoot className={className}>
      <StyledTitle>
        <StyledTitleText color={colors.homeBlue1} variant='h3'>
          ABOUT
        </StyledTitleText>
      </StyledTitle>

      <StyledInfo>
        <StyledText>About Hzoells</StyledText>
      </StyledInfo>
    </StyledRoot>
  )
}

export default memo(About)
