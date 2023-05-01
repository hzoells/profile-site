import React from 'react'

import {Reset} from './Reset'
import {Layout} from './Layout'
import {Typography} from './Typography'
import {Body} from './Body'

export function GlobalStyles() {
  return (
    <>
      <Reset />
      <Layout />
      <Typography />
      <Body />
    </>
  )
}
