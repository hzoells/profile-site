import React, {memo} from 'react'

import {StyledAbout, StyledInfo, StyledRoot, StyledSection} from './Home.styled'

export interface HomeProps {
  className?: string
}

export const Home = (props: HomeProps) => {
  const {className} = props

  return (
    <StyledRoot className={className}>
      <StyledSection id='about'>
        <StyledAbout />
      </StyledSection>

      <StyledSection id='info'>
        <StyledInfo />
      </StyledSection>
    </StyledRoot>
  )
}

export default memo(Home)
