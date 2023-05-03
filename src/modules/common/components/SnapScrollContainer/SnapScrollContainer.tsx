import React, {ReactNode, memo} from 'react'

import {StyledRoot} from './SnapScrollContainer.styled'

export interface SnapScrollContainerProps {
  className?: string
  children?: ReactNode
}

export const SnapScrollContainer = (props: SnapScrollContainerProps) => {
  const {children, className} = props

  return <StyledRoot className={className}>{children}</StyledRoot>
}

export default memo(SnapScrollContainer)
