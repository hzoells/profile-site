import {HEADER_HEIGHT} from 'modules/core/constants'

import styled, {css} from 'styled-components'
import {colors, zIndex} from 'lib/ui/styles'

import {Logo, NavigationDrawerButton, Text} from 'modules/common/components'
import {HeaderButton, MobileHeaderButton} from './components'

export const StyledRoot = styled.nav`
  z-index: ${zIndex.header};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  gap: 16px;
  width: 100%;
  height: ${HEADER_HEIGHT};
  padding: 0 16px;
  box-shadow: 0 0 0 1px rgba(${colors.whiteRGB}, 0.1);
  align-items: center;
  background-color: ${colors.black};
`

export const StyledNavigationDrawerButton = styled(NavigationDrawerButton)``

export const StyledLogoContainer = styled.div``

export const StyledLogo = styled(Logo)``

export interface StyledHeaderButtonsContainerProps {
  buttonCount: number
}

const getHeaderButtonsContainerColumns = ({buttonCount}: StyledHeaderButtonsContainerProps) =>
  new Array<string>(buttonCount).fill(' 300px').reduce((prev, curr) => curr.concat(prev), '')

export const StyledHeaderButtonsContainer = styled.div<StyledHeaderButtonsContainerProps>`
  display: grid;
  grid-template-columns: ${getHeaderButtonsContainerColumns};
  justify-content: center;

  width: 100%;
  height: 100%;
`

export const StyledHeaderButton = styled(HeaderButton)``

export interface MobileHeaderButtonContainerProps {
  isOpen: boolean
}

const getMobileHeaderButtonsProps = ({isOpen}: MobileHeaderButtonContainerProps) =>
  isOpen
    ? css`
        display: flex;
      `
    : css`
        display: none;
      `

export const StyledMobileHeaderButtonContainer = styled.div<MobileHeaderButtonContainerProps>`
  position: absolute;
  top: ${HEADER_HEIGHT};
  left: 0;
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT});

  ${getMobileHeaderButtonsProps}
  flex-direction: column;

  background-color: ${colors.black};
`

export const StyledText = styled(Text)``

export const StyledMobileHeaderButton = styled(MobileHeaderButton)``
