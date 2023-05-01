import React, {HTMLAttributes, ReactNode, forwardRef, memo} from 'react'

import {StyledRoot, StyledInnerContainer} from './LayoutBlock.styled'

export interface LayoutBlockProps extends Omit<HTMLAttributes<HTMLDivElement>, 'dangerouslySetInnerHTML'> {
  children: ReactNode
  className?: string
}

export const LayoutBlock = forwardRef<HTMLDivElement, LayoutBlockProps>(
  (props: LayoutBlockProps, ref) => {
    const {children, className, ...restProps} = props

    return (
      <StyledRoot className={className} ref={ref} {...restProps}>
        <StyledInnerContainer>{children}</StyledInnerContainer>
      </StyledRoot>
    )
  }
)

export default memo(LayoutBlock)
