import styled from 'styled-components'

import {AnimatedInfo, Link, Text} from 'modules/common/components'

export const StyledRoot = styled(AnimatedInfo)``

export const StyledInfo = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
`

export const StyledIconContainer = styled.div`
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledTextItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`

export const StyledText = styled(Text)``

export const StyledLink = styled(Link)``
