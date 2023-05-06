import React, {memo} from 'react'
import {StyledInverse, StyledRoot, StyledSection} from './Experience.styled'

export interface ExperienceProps {
  className?: string
}

export const Experience = (props: ExperienceProps) => {
  const {className} = props

  return (
    <StyledRoot className={className}>
      <StyledSection id='inverse'>
        <StyledInverse />
      </StyledSection>
    </StyledRoot>
  )
}

export default memo(Experience)
