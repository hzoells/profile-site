import React, {memo, useCallback, useMemo} from 'react'

import {redirect} from 'modules/common/helpers'

import {StyledMobileHeaderButton, StyledText} from './MobileHeaderButton.styled'

import {useRouter} from 'next/router'

export interface MobileHeaderButtonProps {
  className?: string
  path: string
  name: string
}

export const MobileHeaderButton = (props: MobileHeaderButtonProps) => {
  const {className, path, name} = props

  const {pathname} = useRouter()

  const isCurrentPage = useMemo(() => pathname === path, [path, pathname])

  const handleClick = useCallback(() => {
    redirect({href: path})
  }, [path])

  return (
    <StyledMobileHeaderButton
      className={className}
      isCurrentPage={isCurrentPage}
      onClick={handleClick}
    >
      <StyledText variant='h7' fontWeight={isCurrentPage ? 'bold' : 'normal'}>
        {name}
      </StyledText>
    </StyledMobileHeaderButton>
  )
}

export default memo(MobileHeaderButton)
