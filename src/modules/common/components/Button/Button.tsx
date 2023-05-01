import React, {
  ButtonHTMLAttributes,
  ComponentType,
  MouseEvent,
  ReactNode,
  forwardRef,
  memo,
  useCallback,
  useMemo,
} from 'react'

import {NEW_TAB_PROPS} from 'modules/common/constants'
import loadingAnimation from 'public/static/lottie/loader.json'

import NextLink, {LinkProps as NextLinkProps} from 'next/link'

import {addHttp} from 'modules/common/helpers'

import {text} from 'lib/ui/styles'

import {
  StyledIcon,
  StyledLottie,
  StyledLottieContainer,
  StyledRoot,
  StyledText,
  StyledTooltip,
} from './Button.styled'

import {isString} from 'lib/types'
import {TooltipPosition} from 'modules/common/components/Tooltip'

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type ButtonFontWeight = keyof typeof text.fontWeight

interface LinkLinkProps extends NextLinkProps {
  isNewTab?: boolean
}

export interface CustomButtonProps {
  backgroundColor?: string
  borderColor?: string
  children?: ReactNode
  color?: string
  className?: string
  fontSize?: string
  fontWeight?: ButtonFontWeight
  hasUnderlineOnHover?: boolean
  hoverBackgroundColor?: string
  hoverBorderColor?: string
  hoverColor?: string
  icon?: ComponentType<any>
  iconAnimation?: string
  iconColor?: string
  iconDropShadow?: string
  iconMargin?: string
  iconSize?: string
  infoTooltipContent?: ReactNode
  infoTooltipPosition?: TooltipPosition
  infoTooltipText?: string
  isFullWidth?: boolean
  isFullHeight?: boolean
  isLoading?: boolean
  isPill?: boolean
  isRound?: boolean
  isText?: boolean
  linkProps?: Partial<LinkLinkProps>
  minWidth?: string
  rightIcon?: ComponentType<any>
  rightIconMargin?: string
  size?: ButtonSize
  text?: string
}

export interface ButtonProps
  extends CustomButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'dangerouslySetInnerHTML'> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
  const {
    backgroundColor,
    borderColor,
    children,
    color = (['cyan1', 'mango1', 'white'] as any[]).includes(backgroundColor) ? 'mirage1' : 'white',
    className,
    fontSize,
    fontWeight,
    hasUnderlineOnHover = false,
    hoverBackgroundColor,
    hoverBorderColor,
    hoverColor,
    icon,
    iconAnimation = 'none',
    iconColor,
    iconDropShadow,
    iconMargin,
    iconSize,
    infoTooltipContent,
    infoTooltipPosition,
    infoTooltipText,
    isFullWidth = false,
    isFullHeight = false,
    isLoading = false,
    isPill = false,
    isRound = false,
    isText = false,
    linkProps = {},
    onClick,
    rightIcon,
    rightIconMargin,
    size = 'md',
    text,
    ...restProps
  } = props

  let {minWidth = '80px'} = props

  const isIcon = icon !== undefined && !rightIcon && !React.isValidElement(children) && !text

  const {href, isNewTab = false, ...restLinkProps} = linkProps

  const formattedHref = useMemo(() => {
    if (isString(href) && !href.startsWith('/')) {
      const hrefWithHttp = addHttp(href)
      const {pathname, protocol} = new URL(hrefWithHttp)

      if (!pathname || protocol) {
        return hrefWithHttp
      }
    }

    return href
  }, [href])

  if (isFullWidth || isIcon || isText) {
    minWidth = '0'
  }

  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(event)
      }

      event.stopPropagation()
    },
    [onClick]
  )

  let contentEl = (
    <StyledRoot
      as={href ? 'a' : 'button'}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      className={!infoTooltipContent && !infoTooltipText ? className : undefined}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      hasLeftIcon={icon !== undefined}
      hasRightIcon={rightIcon !== undefined}
      hasUnderlineOnHover={hasUnderlineOnHover}
      hoverBackgroundColor={hoverBackgroundColor}
      hoverBorderColor={hoverBorderColor}
      hoverColor={hoverColor}
      href={formattedHref as string}
      isFullHeight={isFullHeight}
      isFullWidth={isFullWidth}
      isIcon={isIcon}
      isLoading={isLoading}
      isPill={isPill}
      isRound={isRound}
      isText={isText}
      minWidth={minWidth}
      onClick={handleClick}
      ref={ref}
      size={size}
      type='button'
      {...(isNewTab ? NEW_TAB_PROPS : {})}
      {...restProps}
    >
      {isLoading && (
        <StyledLottieContainer>
          <StyledLottie
            animationData={loadingAnimation}
            rendererSettings={{
              preserveAspectRatio: 'xMidYMid slice',
            }}
          />
        </StyledLottieContainer>
      )}

      {icon && (
        <StyledIcon
          animation={iconAnimation}
          as={icon}
          backgroundColor={backgroundColor}
          color={iconColor}
          iconDropShadow={iconDropShadow}
          iconMargin={iconMargin}
          iconSize={iconSize}
          isIcon={isIcon}
          size={size}
        />
      )}

      {children}

      {text && <StyledText lineLimit={1}>{text}</StyledText>}

      {rightIcon && (
        <StyledIcon
          animation={iconAnimation}
          as={rightIcon}
          backgroundColor={backgroundColor}
          color={iconColor}
          iconDropShadow={iconDropShadow}
          iconMargin={rightIconMargin}
          iconSize={iconSize}
          isRightIcon
          size={size}
        />
      )}
    </StyledRoot>
  )

  if (formattedHref) {
    contentEl = (
      <NextLink
        href={formattedHref}
        legacyBehavior
        {...(isNewTab ? NEW_TAB_PROPS : {})}
        {...restLinkProps}
      >
        {contentEl}
      </NextLink>
    )
  }

  if (infoTooltipContent || infoTooltipText) {
    contentEl = (
      <StyledTooltip
        className={className}
        content={infoTooltipContent}
        position={infoTooltipPosition}
        text={infoTooltipText}
      >
        {contentEl}
      </StyledTooltip>
    )
  }

  return contentEl
})

export default memo(Button)
