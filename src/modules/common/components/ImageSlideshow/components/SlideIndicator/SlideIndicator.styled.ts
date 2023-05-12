import styled, {css} from 'styled-components'

import {colors} from 'lib/ui/styles'

export const StyledRoot = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`

export const StyledDot = styled.div`
  background-color: ${colors.white};

  opacity: 0.2;

  width: 10px;
  height: 10px;

  border-radius: 50%;

  cursor: pointer;

  margin-right: 5px;
`

export interface StyledSelectedIndicatorProps {
  selectedItem: number
}

const getSelectedIndicatorTranslation = ({selectedItem}: StyledSelectedIndicatorProps) =>
  css`
    transform: translateX(${selectedItem * 15}px);
  `

export const StyledSelectedIndicator = styled.div<StyledSelectedIndicatorProps>`
  background-color: ${colors.white};

  opacity: 1;

  width: 10px;
  height: 10px;

  border-radius: 50%;

  position: absolute;
  left 0;

  ${getSelectedIndicatorTranslation}

  transition: transform 1s ease-in-out;
`
