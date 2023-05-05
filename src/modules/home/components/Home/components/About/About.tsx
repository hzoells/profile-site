import React, {memo, useCallback, useState} from 'react'

import {useIntersectionObserver} from '@/modules/common/hooks'

import {StyledLink, StyledRoot, StyledText} from './About.styled'

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
    <StyledRoot className={className} title='ABOUT ME'>
      <StyledText>
        I am a software developer currently working at{' '}
        <StyledLink
          linkProps={{href: 'https://about.inverse.app/', isNewTab: true}}
          text='Inverse'
        />{' '}
        where we are building immersive community experiences for web3. I work across our tech stack
        as well as building Unity features, smart contract ecosystems, and blockchain integrations.
        In my free time, I like to cook and play the violin.
      </StyledText>
    </StyledRoot>
  )
}

export default memo(About)
