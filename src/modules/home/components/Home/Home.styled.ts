import styled from 'styled-components'

import {HEADER_HEIGHT} from 'modules/core/constants'

import {Text} from 'modules/common/components'

export const StyledRoot = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;

  height: calc(100vh - ${HEADER_HEIGHT});
`

export const StyledSection = styled.div`
  scroll-snap-align: start;

  height: calc(100vh - ${HEADER_HEIGHT});
`

export const StyledText = styled(Text)``
