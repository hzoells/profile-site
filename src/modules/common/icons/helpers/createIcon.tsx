import React, {ComponentType, ReactNode} from 'react'
import Icon, {IconProps} from 'modules/common/components/Icon'

export default (path: ReactNode, displayName: string): ComponentType<any> => {
  function NewIcon(props: IconProps) {
    return (
      <Icon {...props} data-testid={`${displayName}Icon`}>
        {path}
      </Icon>
    )
  }

  NewIcon.displayName = displayName

  return NewIcon
}
