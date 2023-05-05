import React, {memo} from 'react'

import {StyledAbout, StyledRoot, StyledSection, StyledText} from './Home.styled'

export interface HomeProps {
  className?: string
}

export const Home = (props: HomeProps) => {
  const {className} = props

  return (
    <StyledRoot className={className}>
      <StyledSection>
        <StyledAbout />
      </StyledSection>
    </StyledRoot>
  )
}

export default memo(Home)
