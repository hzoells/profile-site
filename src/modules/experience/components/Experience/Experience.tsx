import React, {memo} from 'react'
import {
  StyledEducation,
  StyledInternships,
  StyledInverse,
  StyledRoot,
  StyledSection,
  StyledTreehouse,
} from './Experience.styled'

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

      <StyledSection id='treehouse'>
        <StyledTreehouse />
      </StyledSection>

      <StyledSection id='internships'>
        <StyledInternships />
      </StyledSection>

      <StyledSection id='education'>
        <StyledEducation />
      </StyledSection>
    </StyledRoot>
  )
}

export default memo(Experience)
