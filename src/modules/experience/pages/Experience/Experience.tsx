import React from 'react'

import {Page} from 'modules/core/components'
import {StyledRoot} from './Experience.styled'

export interface ExperienceProps {
  className?: string
}

export const Experience = (props: ExperienceProps) => {
  const {className} = props

  return (
    <Page>
      <StyledRoot className={className} />
    </Page>
  )
}

export default Experience
