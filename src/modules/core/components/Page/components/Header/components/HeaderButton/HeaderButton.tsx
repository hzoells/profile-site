import React, {memo, useCallback, useMemo} from 'react'

import {redirect} from 'modules/common/helpers'

import {StyledHeaderButton, StyledText} from './HeaderButton.styled'

import {useRouter} from 'next/router'

export interface HeaderButtonProps {
  className?: string
  path: string
  name: string
}

export const HeaderButton = (props: HeaderButtonProps) => {
  const {className, path, name} = props

  const {pathname} = useRouter()

  const isCurrentPage = useMemo(() => pathname === path, [path, pathname])

  const handleClick = useCallback(() => {
    redirect({href: path})
  }, [path])

  return (
    <StyledHeaderButton className={className} isCurrentPage={isCurrentPage} onClick={handleClick}>
      <StyledText>{name}</StyledText>
    </StyledHeaderButton>
  )
}

export default memo(HeaderButton)
