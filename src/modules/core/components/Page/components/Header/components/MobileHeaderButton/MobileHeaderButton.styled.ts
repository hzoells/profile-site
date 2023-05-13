import styled, {css} from 'styled-components'
import {colors} from 'lib/ui/styles'

import {Text} from 'modules/common/components'

export interface StyledMobileHeaderButtonProps {
  isCurrentPage: boolean
}

const getMobileHeaderButtonBackground = ({isCurrentPage}: StyledMobileHeaderButtonProps) =>
  isCurrentPage
    ? css`
        background-color: rgba(${colors.whiteRGB}, 0.1);
      `
    : css`
        background-color: rgba(${colors.whiteRGB}, 00);
      `

export const StyledMobileHeaderButton = styled.div<StyledMobileHeaderButtonProps>`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 40px;
  cursor: pointer;

  height: 50px;

  //border-bottom: solid ${colors.white} 2px;

  transition: border-bottom-color 1s;

  ${getMobileHeaderButtonBackground}
`

export interface StyledMobileHeaderTextProps {
  isCurrentPage: boolean
}

export const StyledText = styled(Text)``
