import styled from 'styled-components'

import Icon from 'modules/common/components/Icon'
import {BUBBLE_POINTER_HEIGHT, BUBBLE_POINTER_WIDTH} from './constants'

export const StyledRoot = styled(Icon)`
  width: ${BUBBLE_POINTER_WIDTH / BUBBLE_POINTER_HEIGHT}em;
  height: 1em;
`
