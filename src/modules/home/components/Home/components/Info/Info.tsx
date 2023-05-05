import React, {memo, useCallback, useState} from 'react'

import {PAGE_FILES_PATH} from 'modules/core/constants'
import {GITHUB_URL, LINKEDIN_URL} from './constants'

import {useIntersectionObserver} from 'modules/common/hooks'

import {Document, Github, LinkedIn} from 'modules/common/icons'
import {
  StyledIconContainer,
  StyledInfo,
  StyledLink,
  StyledRoot,
  StyledText,
  StyledTextItemContainer,
  StyledTitle,
  StyledTitleText,
} from './Info.styled'

export interface InfoProps {
  className?: string
}

export const Info = (props: InfoProps) => {
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
        <StyledTitleText variant='h3'>INFO</StyledTitleText>
      </StyledTitle>

      <StyledInfo isIntersecting={isIntersecting}>
        <StyledIconContainer>
          <StyledLink icon={Github} iconSize='xl' linkProps={{href: GITHUB_URL, isNewTab: true}} />
        </StyledIconContainer>

        <StyledTextItemContainer>
          <StyledText>
            Check out my <StyledLink linkProps={{href: GITHUB_URL, isNewTab: true}} text='github' />{' '}
            to see the code for this site.
          </StyledText>
        </StyledTextItemContainer>

        <StyledIconContainer>
          <StyledLink
            icon={LinkedIn}
            iconSize='xl'
            iconColor='white'
            linkProps={{href: LINKEDIN_URL, isNewTab: true}}
          />
        </StyledIconContainer>

        <StyledTextItemContainer>
          <StyledText>
            Connect with me on{' '}
            <StyledLink linkProps={{href: LINKEDIN_URL, isNewTab: true}} text='LinkedIn' /> to get
            in touch.
          </StyledText>
        </StyledTextItemContainer>

        <StyledIconContainer>
          <StyledLink
            icon={Document}
            iconSize='xl'
            iconColor='white'
            linkProps={{href: `${PAGE_FILES_PATH}/Hugo_Resume.pdf`, isNewTab: true}}
          />
        </StyledIconContainer>

        <StyledTextItemContainer>
          <StyledText>
            For more details on my professional background and skills, please see my{' '}
            <StyledLink
              linkProps={{href: `${PAGE_FILES_PATH}/Hugo_Resume.pdf`, isNewTab: true}}
              text='resume'
            />
            .
          </StyledText>
        </StyledTextItemContainer>
      </StyledInfo>
    </StyledRoot>
  )
}

export default memo(Info)
