import React, {ReactNode, memo} from 'react'

import {useSelector} from 'modules/common/hooks'
import {coreSelectors} from '@/modules/core/redux'

import {StyledRoot} from './SnapScrollSection.styled'

export interface SnapScrollSectionProps {
  className?: string
  children?: ReactNode
  id?: string
}

export const SnapScrollSection = (props: SnapScrollSectionProps) => {
  const {children, className, id} = props

  const isMobile = useSelector(coreSelectors.getIsMobile)

  return (
    <StyledRoot className={className} id={id}>
      {children}
    </StyledRoot>
  )
}

export default memo(SnapScrollSection)
