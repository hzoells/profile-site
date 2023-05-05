import styled, {css} from 'styled-components'

import {colors} from 'lib/ui/styles'

export const StyledRoot = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 5px;
`

export const StyledDot = styled.div`
  background-color: ${colors.white};

  opacity: 0.2;

  width: 15px;
  height: 15px;

  border-radius: 50%;
`

export interface StyledSelectedIndicatorProps {
  selectedItem: number
}

const getSelectedIndicatorTranslation = ({selectedItem}: StyledSelectedIndicatorProps) =>
  css`
    transform: translateY(${selectedItem * 20}px);
  `

export const StyledSelectedIndicator = styled.div<StyledSelectedIndicatorProps>`
  background-color: ${colors.white};

  opacity: 1;

  width: 15px;
  height: 15px;

  border-radius: 50%;

  position: absolute;
  top 0;

  ${getSelectedIndicatorTranslation}

  transition: transform 1s ease-in-out;
`
