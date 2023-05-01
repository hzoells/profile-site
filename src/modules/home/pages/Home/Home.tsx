import React from 'react'

import {Page} from 'modules/core/components'
import {StyledRoot, StyledText} from './Home.styled'

import {HomePageContext} from './types'

export interface HomeProps {
  className?: string
}

export const Home = (props: HomeProps) => {
  const {className} = props

  return (
    <Page>
      <StyledRoot className={className}>
        <StyledText>Home Page</StyledText>
      </StyledRoot>
    </Page>
  )
}

Home.getInitialProps = async (_context: HomePageContext) => {
  return {}
}

export default Home
