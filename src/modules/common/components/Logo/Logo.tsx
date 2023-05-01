import React, {HTMLAttributes, forwardRef, memo} from 'react'

import {PAGE_SITE_NAME, PAGE_IMAGES_PATH} from 'modules/core/constants'

import NextLink from 'next/link'
import {StyledRoot, StyledImage, StyledText, LogoSize} from './Logo.styled'

const LOGO_SRC = `${PAGE_IMAGES_PATH}/icon.svg`

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  hasText?: boolean
  isLink?: boolean
  size?: LogoSize
}

export const Logo = forwardRef<HTMLDivElement, LogoProps>((props: LogoProps, ref) => {
  const {className, hasText = false, isLink = false, size = 'md'} = props

  const logo = (
    <StyledRoot as={isLink ? 'span' : 'div'} className={className} ref={ref}>
      <StyledImage alt={`${PAGE_SITE_NAME} logo`} size={size} src={LOGO_SRC} />

      {hasText && (
        <StyledText color='white' fontWeight='bold' size={size}>
          {PAGE_SITE_NAME}
        </StyledText>
      )}
    </StyledRoot>
  )

  return isLink ? (
    <NextLink href='/' passHref>
      {logo}
    </NextLink>
  ) : (
    logo
  )
})

export default memo(Logo)
