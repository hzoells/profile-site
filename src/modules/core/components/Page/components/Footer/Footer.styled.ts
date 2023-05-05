import styled from 'styled-components'
import {colors} from 'lib/ui/styles'

import {LayoutBlock} from 'modules/common/components'

export const StyledRoot = styled.footer`
  z-index: 1;
  background-color: ${colors.white};
  font-size: 12px;
`

export const StyledLayoutBlock = styled(LayoutBlock)``

export const StyledContentContainer = styled.div`
  display: flex;
  column-gap: 120px;
  row-gap: 32px;
  flex-wrap: wrap;
`

export const StyledBrandContainer = styled.div`
  flex: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const StyledMainContentContainer = styled.div`
  flex: 1;
  display: flex;
  column-gap: 64px;
  row-gap: 32px;
  flex-wrap: wrap;
`
