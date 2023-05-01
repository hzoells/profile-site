import styled, {css} from 'styled-components'
import {colors} from 'lib/ui/styles'

import {Text} from 'modules/common/components'

export interface StyledHeaderButtonProps {
  isCurrentPage: boolean
}

const getHeaderButtonBackgroundColor = ({isCurrentPage}: StyledHeaderButtonProps) =>
  isCurrentPage
    ? css`rgba(${colors.homeBlueLightRGB}, 0.2)`
    : css`rgba(${colors.homeBlueLightRGB}, 0)`

export const StyledHeaderButton = styled.div<StyledHeaderButtonProps>`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 40px;
  cursor: pointer;
  background-color: ${getHeaderButtonBackgroundColor};

  &:hover {
    background-color: rgba(${colors.homeBlueLightRGB}, 0.5);
    transition: background-color 1s ease-in-out;
  }
`

export const StyledText = styled(Text)``
