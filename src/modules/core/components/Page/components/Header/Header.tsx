import React, {memo} from 'react'

import {useSelector} from 'modules/common/hooks/redux'
import {coreSelectors} from 'modules/core/redux'

import {
  StyledHeaderButton,
  StyledHeaderButtonsContainer,
  StyledLogo,
  StyledLogoContainer,
  StyledNavigationDrawerButton,
  StyledRoot,
  StyledText,
} from './Header.styled'

interface HeaderButtonItem {
  name: string
  path: string
}

const HEADER_BUTTONS: HeaderButtonItem[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Experience',
    path: '/experience',
  },
  {
    name: 'Hobbies',
    path: '/hobbies',
  },
]

export interface HeaderProps {
  className?: string
}

export const Header = (props: HeaderProps) => {
  const {className} = props

  const isMobile = useSelector(coreSelectors.getIsMobile)

  return (
    <StyledRoot className={className}>
      {isMobile ? (
        <StyledNavigationDrawerButton />
      ) : (
        <StyledLogoContainer>
          <StyledLogo isLink size='sm' />
        </StyledLogoContainer>
      )}

      <StyledHeaderButtonsContainer buttonCount={HEADER_BUTTONS.length}>
        {HEADER_BUTTONS.map(buttonItem => (
          <StyledHeaderButton key={buttonItem.name} name={buttonItem.name} path={buttonItem.path} />
        ))}
      </StyledHeaderButtonsContainer>
    </StyledRoot>
  )
}

export default memo(Header)
