import React, {memo} from 'react'
import {StyledCooking, StyledRoot, StyledSection, StyledViolin} from './Hobbies.styled'

export interface HobbiesProps {
  className?: string
}

export const Hobbies = (props: HobbiesProps) => {
  const {className} = props

  return (
    <StyledRoot className={className}>
      <StyledSection id='violin'>
        <StyledViolin />
      </StyledSection>

      <StyledSection id='cooking'>
        <StyledCooking />
      </StyledSection>
    </StyledRoot>
  )
}

export default memo(Hobbies)
