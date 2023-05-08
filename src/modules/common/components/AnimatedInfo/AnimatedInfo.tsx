import React, {memo, useCallback, useState, ReactNode} from 'react'

import {useIntersectionObserver} from '@/modules/common/hooks'

import {StyledInfo, StyledRoot, StyledTitle, StyledTitleText} from './AnimatedInfo.styled'

export interface AnimatedInfoProps {
  className?: string
  children?: ReactNode
  title: string
}

export const AnimatedInfo = (props: AnimatedInfoProps) => {
  const {children, className, title} = props

  const [isIntersecting, setIsIntersecting] = useState(false)
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null)

  const rootElRef = useCallback((rootEl: HTMLElement | null) => setRootEl(rootEl), [])

  useIntersectionObserver(
    rootEl,
    entries => {
      entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting) {
          setIsIntersecting(true)
        } else {
          setIsIntersecting(false)
        }
      })
    },
    {}
  )

  return (
    <StyledRoot className={className} ref={rootElRef}>
      <StyledTitle isIntersecting={isIntersecting}>
        <StyledTitleText variant='h3'>{title}</StyledTitleText>
      </StyledTitle>

      <StyledInfo isIntersecting={isIntersecting}>{children}</StyledInfo>
    </StyledRoot>
  )
}

export default memo(AnimatedInfo)
