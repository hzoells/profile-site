import styled from 'styled-components'

import {HEADER_HEIGHT} from 'modules/core/constants'

export const StyledRoot = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;

  height: calc(100vh - ${HEADER_HEIGHT});
`
