import {css} from 'styled-components'
import transitions from 'lib/ui/styles/presets/transitions'
import {lighten} from './conversions'

export default (color: string) => css`
  color: ${color};
  transition: color ${transitions.duration.xs} ${transitions.timing.default};
  cursor: pointer;

  &:hover {
    color: ${lighten(color, 90)};
  }
`
