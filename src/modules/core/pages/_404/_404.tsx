import React, {memo} from 'react'

import {StyledRoot} from './_404.styled'

export interface _404Props {
  className?: string
}

export const _404 = (props: _404Props) => {
  const {className} = props

  return <StyledRoot className={className}>404 - Page Not Foun</StyledRoot>
}

export default memo(_404)
