import React, {memo, useCallback, useState} from 'react'

import {useIntersectionObserver} from '@/modules/common/hooks'

import {StyledInfo, StyledRoot, StyledText, StyledTitle, StyledTitleText} from './About.styled'

export interface AboutProps {
  className?: string
}

export const About = (props: AboutProps) => {
  const {className} = props

  const [isIntersecting, setIsIntersecting] = useState(false)
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null)

  const rootElRef = useCallback((rootEl: HTMLElement | null) => setRootEl(rootEl), [])

  useIntersectionObserver(
    rootEl,
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
        } else {
          setIsIntersecting(false)
        }
      })
    },
    {rootMargin: '-100px'}
  )

  return (
    <StyledRoot className={className} ref={rootElRef}>
      <StyledTitle isIntersecting={isIntersecting}>
        <StyledTitleText variant='h3'>ABOUT</StyledTitleText>
      </StyledTitle>

      <StyledInfo>
        <StyledText>About Hzoells</StyledText>
      </StyledInfo>
    </StyledRoot>
  )
}

export default memo(About)
