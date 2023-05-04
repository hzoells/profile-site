import styled from 'styled-components'

import {colors} from 'lib/ui/styles'

import {Text} from 'modules/common/components'

export const StyledRoot = styled.div`
  height: 100%;
  width: 100%;
  padding: 100px;

  display: flex;
  flex-direction: column;
`

export const StyledTitle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 50%;
  padding: 50px 0 50px 75px;

  margin-bottom: 50px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 10px;
    width: 100%;
    background-color: ${colors.white};
    border-radius: 5px;

    transform: rotate(-5deg);
  }
`

export const StyledTitleText = styled(Text)``

export const StyledInfo = styled.div`
  width: 50%;
  align-self: end;
`

export const StyledText = styled(Text)``
