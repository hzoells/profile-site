import styled, {css} from 'styled-components'

import {HEADER_HEIGHT} from 'modules/core/constants'

import {ScrollIndicator} from './components'

interface MobileProps {
  isMobile: boolean
}

export const StyledRoot = styled.div`
  scroll-snap-type: y mandatory;
  scroll-snap-align: start end;
  overflow-y: scroll;

  height: calc(100vh - ${HEADER_HEIGHT});
`

export interface StyledScrollIndicatorProps extends MobileProps {}

const getScrollIndicatorMobileProps = ({isMobile}: StyledScrollIndicatorProps) =>
  isMobile
    ? css`
        left: 5px;
      `
    : css`
        left: 20px;
      `

export const StyledScrollIndicator = styled(ScrollIndicator)<StyledScrollIndicatorProps>`
  position: absolute;
  ${getScrollIndicatorMobileProps}
  top: 50%;
`
