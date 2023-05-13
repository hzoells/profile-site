import React, {memo} from 'react'

import {Menu} from 'modules/common/icons'
import {StyledRoot} from './NavigationDrawerButton.styled'

export interface NavigationDrawerButtonProps {
  className?: string
  handleClick?: () => void
}

export const NavigationDrawerButton = (props: NavigationDrawerButtonProps) => {
  const {className, handleClick} = props

  return <StyledRoot className={className} color='gray8' icon={Menu} onClick={handleClick} />
}

export default memo(NavigationDrawerButton)
