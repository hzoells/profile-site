import styled from 'styled-components'

import {HEADER_HEIGHT} from 'modules/core/constants'

import {ScrollIndicator} from './components'

export const StyledRoot = styled.div`
  scroll-snap-type: y mandatory;
  scroll-snap-align: start end;
  overflow-y: scroll;

  height: calc(100vh - ${HEADER_HEIGHT});
`

export const StyledScrollIndicator = styled(ScrollIndicator)`
  position: absolute;
  left: 20px;
  top: 50%;
`
