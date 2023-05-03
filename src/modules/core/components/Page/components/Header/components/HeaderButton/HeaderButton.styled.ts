import styled, {css} from 'styled-components'
import {colors} from 'lib/ui/styles'

import {Text} from 'modules/common/components'

export interface StyledHeaderButtonProps {
  isCurrentPage: boolean
}

const getHeaderButtonBorder = ({isCurrentPage}: StyledHeaderButtonProps) =>
  isCurrentPage
    ? css`
        border-bottom-color: rgba(${colors.homeBlue1RGB}, 1);
      `
    : css`
        border-bottom-color: rgba(${colors.homeBlue1RGB}, 0);
      `

export const StyledHeaderButton = styled.div<StyledHeaderButtonProps>`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 40px;
  cursor: pointer;

  border-bottom: solid ${colors.homeBlue1} 2px;

  transition: border-bottom-color 1s;

  ${getHeaderButtonBorder}
`

export interface StyledHeaderTextProps {
  isCurrentPage: boolean
}

const getHeaderTextUnderlineColor = ({isCurrentPage}: StyledHeaderTextProps) =>
  isCurrentPage ? css`rgba(${colors.homeBlue1RGB}, 0)` : css`rgba(${colors.homeBlue1RGB}, 1)`

export const StyledText = styled(Text)`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${getHeaderTextUnderlineColor};
    transform-origin: bottom right;
    transition: transform 1s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`
