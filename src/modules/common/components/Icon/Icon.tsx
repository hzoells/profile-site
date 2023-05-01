import React, {MutableRefObject, ReactNode, memo} from 'react'

import {StyledRoot} from './Icon.styled'

export interface IconProps {
  children: ReactNode
  className?: string
  innerRef?: MutableRefObject<SVGSVGElement | null>
  title?: string
  viewBox?: string
}

export function Icon({
  children,
  className,
  innerRef,
  title,
  viewBox = '0 0 24 24',
  ...props
}: IconProps) {
  return (
    <StyledRoot
      aria-hidden={title ? 'false' : 'true'}
      aria-label={title}
      className={className}
      focusable='false'
      ref={innerRef}
      role={title ? 'img' : 'presentation'}
      viewBox={viewBox}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </StyledRoot>
  )
}

export default memo(Icon)
