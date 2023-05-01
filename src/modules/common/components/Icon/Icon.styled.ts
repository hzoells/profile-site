import styled from 'styled-components'
import {transitions} from 'lib/ui/styles'

export const StyledRoot = styled.svg`
  display: inline-block;
  width: 1em;
  height: 1em;
  fill: currentColor;
  stroke: currentColor;
  user-select: none;
  transition: fill ${transitions.duration.xs} ${transitions.timing.default};
`
