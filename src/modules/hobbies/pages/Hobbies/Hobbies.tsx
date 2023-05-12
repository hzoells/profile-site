import React from 'react'

import {Page} from 'modules/core/components'
import {StyledRoot} from './Hobbies.styled'

export interface HobbiesProps {
  className?: string
}

export const Hobbies = (props: HobbiesProps) => {
  const {className} = props

  return (
    <Page>
      <StyledRoot className={className} />
    </Page>
  )
}

export default Hobbies
