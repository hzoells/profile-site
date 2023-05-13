import React, {memo, useCallback, useState, ReactNode} from 'react'

import {useSelector} from 'modules/common/hooks'
import {coreSelectors} from '@/modules/core/redux'

import {useIntersectionObserver} from '@/modules/common/hooks'

import {StyledInfo, StyledRoot, StyledTitle, StyledTitleText} from './AnimatedInfo.styled'

export interface AnimatedInfoProps {
  className?: string
  children?: ReactNode
  title: string
}

export const AnimatedInfo = (props: AnimatedInfoProps) => {
  const {children, className, title} = props

  const isMobile = useSelector(coreSelectors.getIsMobile)

  const [isIntersecting, setIsIntersecting] = useState(false)
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null)

  const rootElRef = useCallback((rootEl: HTMLElement | null) => setRootEl(rootEl), [])

  useIntersectionObserver(
    rootEl,
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
        } else {
          setIsIntersecting(false)
        }
      })
    },
    {threshold: 0.1}
  )

  return (
    <StyledRoot className={className} isMobile={isMobile} ref={rootElRef}>
      <StyledTitle isIntersecting={isIntersecting} isMobile={isMobile}>
        <StyledTitleText variant='h3'>{title}</StyledTitleText>
      </StyledTitle>

      <StyledInfo isIntersecting={isIntersecting} isMobile={isMobile}>
        {children}
      </StyledInfo>
    </StyledRoot>
  )
}

export default memo(AnimatedInfo)
