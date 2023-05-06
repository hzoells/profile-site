import React, {memo} from 'react'

import {PAGE_FILES_PATH} from 'modules/core/constants'
import {GITHUB_URL, LINKEDIN_URL} from './constants'

import {Document, Github, LinkedIn} from 'modules/common/icons'
import {
  StyledIconContainer,
  StyledInfo,
  StyledLink,
  StyledRoot,
  StyledText,
  StyledTextItemContainer,
} from './Info.styled'

export interface InfoProps {
  className?: string
}

export const Info = (props: InfoProps) => {
  const {className} = props

  return (
    <StyledRoot className={className} title='INFO'>
      <StyledInfo>
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
