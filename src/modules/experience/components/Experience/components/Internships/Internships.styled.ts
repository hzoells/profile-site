import styled from 'styled-components'

import {colors} from 'lib/ui/styles'

import {AnimatedInfo, Link, Text} from 'modules/common/components'

export const StyledRoot = styled(AnimatedInfo)``

export const StyledInfo = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`

export const StyledItemTitleContainer = styled.div`
  margin-bottom: 2px;
`

export const StyledTitleText = styled(Text)`
  border-bottom: solid 2px ${colors.homeBlue};
`

export const StyledItemContentContainer = styled.div`
  padding-left: 40px;
  margin-bottom: 10px;
`

export const StyledText = styled(Text)``

export const StyledLink = styled(Link)``
