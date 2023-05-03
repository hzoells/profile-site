import React, {ReactNode, memo} from 'react'

import {StyledRoot} from './SnapScrollSection.styled'

export interface SnapScrollSectionProps {
  className?: string
  children?: ReactNode
}

export const SnapScrollSection = (props: SnapScrollSectionProps) => {
  const {children, className} = props

  return <StyledRoot className={className}>{children}</StyledRoot>
}

export default memo(SnapScrollSection)
