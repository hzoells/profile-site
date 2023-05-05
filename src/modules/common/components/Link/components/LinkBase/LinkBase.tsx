import React, {
  HTMLAttributes,
  ReactNode,
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react'

import {NEW_TAB_PROPS} from 'modules/common/constants'

import {parse} from 'url'

import {useForkRef} from 'modules/common/hooks'

import NextLink, {LinkProps as NextLinkProps} from 'next/link'
import {StyledRoot} from './LinkBase.styled'

import {isString} from 'lib/types'

interface LinkBaseLinkProps extends NextLinkProps {
  isNewTab?: boolean
}

export type LinkBaseElement = HTMLAnchorElement

export interface LinkBaseProps extends HTMLAttributes<LinkBaseElement> {
  children: ReactNode
  className?: string
  linkProps?: Partial<LinkBaseLinkProps>
  title?: string
}

export const LinkBase = forwardRef<HTMLAnchorElement, LinkBaseProps>(
  (props: LinkBaseProps, ref) => {
    const {children, className, linkProps = {}, title, ...restProps} = props

    const innerRef = useRef<HTMLAnchorElement | null>(null)
    const forkRef = useForkRef(ref, innerRef)

    const {href, isNewTab = false, ...restLinkProps} = linkProps

    const {isExternalHref, externalHrefProps} = useMemo(() => {
      if (isString(href) && !href.startsWith('/')) {
        const {pathname, protocol} = parse(href)

        if (!pathname || protocol) {
          return {isExternalHref: true, externalHrefProps: {href}}
        }
      }

      return {isExternalHref: false, externalHrefProps: {}}
    }, [href])

    const handleKeydown = useCallback(
      (event: KeyboardEvent) => {
        const innerEl = innerRef.current

        if (innerEl && event.key === 'Enter') {
          event.preventDefault()
          innerEl.click()
        }
      },
      [innerRef]
    )

    useEffect(() => {
      const innerEl = innerRef.current

      if (innerEl && !href) {
        innerEl.addEventListener('keydown', handleKeydown)

        return () => {
          innerEl.removeEventListener('keydown', handleKeydown)
        }
      }
    }, [handleKeydown, href, innerRef])

    const anchor = (
      <StyledRoot
        as={href ? 'span' : 'a'}
        className={className}
        ref={forkRef}
        tabIndex={0}
        title={title}
        {...restProps}
      >
        {children}
      </StyledRoot>
    )

    return href ? (
      <NextLink
        href={href}
        {...(isNewTab ? NEW_TAB_PROPS : {})}
        {...(isExternalHref ? externalHrefProps : {})}
        {...restLinkProps}
      >
        {anchor}
      </NextLink>
    ) : (
      anchor
    )
  }
)

export default memo(LinkBase)
