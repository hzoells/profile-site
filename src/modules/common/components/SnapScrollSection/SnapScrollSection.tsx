import React, {ReactNode, memo} from 'react'

import {StyledRoot} from './SnapScrollSection.styled'

export interface SnapScrollSectionProps {
  className?: string
  children?: ReactNode
  id?: string
}

export const SnapScrollSection = (props: SnapScrollSectionProps) => {
  const {children, className, id} = props

  return (
    <StyledRoot className={className} id={id}>
      {children}
    </StyledRoot>
  )
}

export default memo(SnapScrollSection)
