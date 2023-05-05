import React from 'react'

import {Page} from 'modules/core/components'
import {StyledRoot} from './Home.styled'

import {HomePageContext} from './types'

export interface HomeProps {
  className?: string
}

export const Home = (props: HomeProps) => {
  const {className} = props

  return (
    <Page>
      <StyledRoot className={className} />
    </Page>
  )
}

export default Home
