import React, {memo, useCallback} from 'react'

import {useAction} from 'modules/common/hooks/redux'
import {coreActions} from 'modules/core/redux'

import {Menu} from 'modules/common/icons'
import {StyledRoot} from './NavigationDrawerButton.styled'

export interface NavigationDrawerButtonProps {
  className?: string
}

export const NavigationDrawerButton = (props: NavigationDrawerButtonProps) => {
  const {className} = props

  const toggleIsSidebarOpen = useAction(coreActions.toggleIsSidebarOpen)

  const handleToggleIsSidebarOpen = useCallback(() => {
    toggleIsSidebarOpen()
  }, [toggleIsSidebarOpen])

  return (
    <StyledRoot
      className={className}
      color='gray8'
      icon={Menu}
      onClick={handleToggleIsSidebarOpen}
    />
  )
}

export default memo(NavigationDrawerButton)
