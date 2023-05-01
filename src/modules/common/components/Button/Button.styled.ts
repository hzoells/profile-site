import styled from 'styled-components'
import {borders, colors, fonts, text, transitions} from 'lib/ui/styles'

import Lottie from 'lottie-react'
import Text from 'modules/common/components/Text'
import Tooltip from 'modules/common/components/Tooltip'

import type {ButtonSize, ButtonFontWeight} from './Button'

interface StyledRootProps {
  backgroundColor?: string
  borderColor?: string
  color?: string
  fontSize?: string
  fontWeight?: ButtonFontWeight
  hasLeftIcon?: boolean
  hasRightIcon?: boolean
  hasUnderlineOnHover?: boolean
  hoverBackgroundColor?: string
  hoverBorderColor?: string
  hoverColor?: string
  isFullWidth?: boolean
  isFullHeight?: boolean
  isIcon?: boolean
  isLoading?: boolean
  isPill?: boolean
  isRound?: boolean
  isText?: boolean
  minWidth: string
  size: ButtonSize
}

const getRootDisplay = (props: StyledRootProps) => {
  const {isText} = props

  return isText ? 'inline-flex' : 'flex'
}

const getRootPadding = (props: StyledRootProps) => {
  const {backgroundColor, hasLeftIcon, hasRightIcon, hoverBackgroundColor, isIcon, isText, size} =
    props

  if (isIcon || isText) {
    return 0
  }

  const sidePadding = {
    xs: 8,
    sm: backgroundColor || hoverBackgroundColor ? 12 : 8,
    md: backgroundColor || hoverBackgroundColor ? 16 : 8,
    lg: 18,
    xl: 24,
  }[size]

  return `
    8px
    ${sidePadding - (hasRightIcon ? 2 : 0)}px
    8px
    ${sidePadding - (hasLeftIcon ? 2 : 0)}px
  `
}

const getRootWidth = (props: StyledRootProps) => {
  const {isFullWidth, isIcon, isText, size} = props

  if (isFullWidth) {
    return '100%'
  }

  if (isIcon && !isText) {
    return {
      xs: '24px',
      sm: '32px',
      md: '40px',
      lg: '48px',
      xl: '56px',
    }[size]
  }

  return 'auto'
}

const getRootMinWidth = (props: StyledRootProps) => {
  const {minWidth} = props

  return minWidth
}

const getRootMinHeight = (props: StyledRootProps) => {
  const {isFullHeight, isText, size} = props

  if (isFullHeight) {
    return '100%'
  }

  if (isText) {
    return 'auto'
  }

  return {
    xs: '24px',
    sm: '32px',
    md: '40px',
    lg: '48px',
    xl: '56px',
  }[size]
}

const getRootBorderRadius = (props: StyledRootProps) => {
  const {isPill, isRound} = props

  if (isPill) {
    return borders.radius.xxl
  }

  if (isRound) {
    return borders.radius.circle
  }

  return borders.radius.md
}

const getRootBorder = (props: StyledRootProps) => {
  const {borderColor} = props

  if (borderColor) {
    const colorHex = (colors as any)[borderColor] || borderColor

    return `1px solid ${colorHex}`
  }

  return 'none'
}

const getRootHoverBorder = (props: StyledRootProps) => {
  const {hoverBorderColor, borderColor} = props

  if (hoverBorderColor || borderColor) {
    let colorHex
    if (hoverBorderColor) {
      colorHex = (colors as any)[hoverBorderColor] || hoverBorderColor
    } else if (borderColor) {
      colorHex = (colors as any)[borderColor] || borderColor
    }

    return `1px solid ${colorHex}`
  }

  return 'none'
}

const getRootBackgroundColor = (props: StyledRootProps) => {
  const {backgroundColor} = props

  if (backgroundColor) {
    const colorHex = (colors as any)[backgroundColor]

    return colorHex ? colorHex : backgroundColor
  }

  return 'transparent'
}

const getRootHoverBackgroundColor = (props: StyledRootProps) => {
  const {backgroundColor, hoverBackgroundColor} = props

  if (hoverBackgroundColor) {
    const colorHex = (colors as any)[hoverBackgroundColor]

    return colorHex ? colorHex : hoverBackgroundColor
  }

  if (backgroundColor) {
    if (backgroundColor === 'white') {
      return colors.gray9
    }

    const colorWithoutBrightnessLevel = backgroundColor.slice(0, -1)
    const brightnessLevel = parseInt(backgroundColor.slice(-1))
    const hoverBrightnessLevel =
      colorWithoutBrightnessLevel === 'gray' ? brightnessLevel - 1 : brightnessLevel + 1
    const hoverBackgroundColor = backgroundColor.slice(0, -1) + hoverBrightnessLevel

    let colorHex = (colors as any)[hoverBackgroundColor]

    if (!colorHex) {
      colorHex = (colors as any)[backgroundColor]
    }

    return colorHex ? colorHex : backgroundColor
  }

  return 'transparent'
}

const getRootColor = (props: StyledRootProps) => {
  const {color} = props

  if (color) {
    const colorHex = (colors as any)[color]

    return colorHex ? colorHex : color
  }

  return 'inherit'
}

const getRootHoverColor = (props: StyledRootProps) => {
  const {color, hoverColor} = props

  if (hoverColor) {
    const colorHex = (colors as any)[hoverColor]

    return colorHex ? colorHex : hoverColor
  }

  if (color) {
    const colorWithoutBrightnessLevel = color.slice(0, -1)

    let hoverColor
    if (colorWithoutBrightnessLevel === 'gray') {
      hoverColor = 'white'
    } else {
      hoverColor = color
    }

    const colorHex = (colors as any)[hoverColor]

    return colorHex ? colorHex : color
  }

  return 'inherit'
}

const getRootFontSize = (props: StyledRootProps) => {
  const {fontSize, isText, size} = props

  if (fontSize) {
    return fontSize
  }

  if (isText) {
    return 'inherit'
  }

  return {
    xs: '12px',
    sm: '13px',
    md: '14px',
    lg: '16px',
    xl: '18px',
  }[size]
}

const getRootFontWeight = (props: StyledRootProps) => {
  const {fontWeight} = props

  if (fontWeight) {
    return text.fontWeight[fontWeight]
  }

  return fonts.weight.semiBold
}

const getPointerEvents = (props: StyledRootProps) => {
  const {isLoading} = props

  return isLoading ? 'none' : 'auto'
}

const getBackgroundColorTransitionDuration = (props: StyledRootProps) => {
  const {backgroundColor} = props

  if (backgroundColor) {
    return '0.15s'
  }

  return '0s'
}

const getTextContainerHoverFocusAfterTransform = (props: StyledRootProps) => {
  const {hasUnderlineOnHover} = props

  if (hasUnderlineOnHover) {
    return 'scaleY(1)'
  }

  return undefined
}

export const StyledRoot = styled.button<StyledRootProps>`
  display: ${getRootDisplay};
  position: relative;
  padding: ${getRootPadding};
  width: ${getRootWidth};
  min-width: ${getRootMinWidth};
  min-height: ${getRootMinHeight};
  outline: none;
  border: ${getRootBorder};
  border-radius: ${getRootBorderRadius};
  background-color: ${getRootBackgroundColor};
  align-items: center;
  justify-content: center;
  color: ${getRootColor};
  font-family: ${text.fontFamily.primary};
  font-size: ${getRootFontSize};
  font-weight: ${getRootFontWeight};
  line-height: 1.5;
  cursor: pointer;
  pointer-events: ${getPointerEvents};
  transition: background-color ${getBackgroundColorTransitionDuration};
  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${colors.cyan1};
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform ${transitions.duration.xs};
  }
  &:hover,
  &:focus {
    border: ${getRootHoverBorder};
    background-color: ${getRootHoverBackgroundColor};
    color: ${getRootHoverColor};
    &::after {
      transform: ${getTextContainerHoverFocusAfterTransform};
    }
  }
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`

export const StyledLottieContainer = styled.div`
  display: flex;
  margin-right: 16px;
  width: 24px;
  height: 0;
  align-items: center;
  justify-content: center;
`

export const StyledLottie = styled(Lottie)`
  width: 48px;
  height: 48px;
`

interface StyledIconProps {
  animation: string
  backgroundColor?: string
  color?: string
  iconDropShadow?: string
  iconMargin?: string
  iconSize: string
  isIcon?: boolean
  isRightIcon?: boolean
  size: ButtonSize
}

const getIconMargin = (props: StyledIconProps) => {
  const {iconMargin, isIcon, isRightIcon, size} = props

  if (isIcon) {
    return 0
  }

  let margin = iconMargin

  if (iconMargin === undefined) {
    switch (size) {
      case 'xs':
        margin = '4px'
        break
      case 'sm':
        margin = '6px'
        break
      case 'lg':
        margin = '10px'
        break
      default:
        margin = '8px'
    }
  }

  if (isRightIcon) {
    return `0 0 0 ${margin}`
  }

  return `0 ${margin} 0 0`
}

const getIconColor = (props: StyledIconProps) => {
  const {backgroundColor, color, isRightIcon} = props

  if (color) {
    return (colors as any)[color]
  }

  if (isRightIcon) {
    if (backgroundColor) {
      const colorWithoutBrightnessLevel = backgroundColor.slice(0, -1)
      const brightnessLevel = parseInt(backgroundColor.slice(-1))

      if (colorWithoutBrightnessLevel === 'gray' && brightnessLevel > 2) {
        return colors.gray5
      }
    }

    return colors.gray4
  }

  return 'inherit'
}

const getIconFontSize = (props: StyledIconProps) => {
  const {iconSize, isIcon, size} = props

  if (iconSize) {
    return iconSize
  }

  return {
    xs: '16px',
    sm: isIcon ? '18px' : '16px',
    md: isIcon ? '20px' : '18px',
    lg: '24px',
    xl: isIcon ? '32px' : '24px',
  }[size]
}

const getIconDropShadow = (props: StyledIconProps) => {
  const {iconDropShadow} = props

  if (iconDropShadow) {
    return iconDropShadow
  }

  return 'none'
}

export const StyledIcon = styled.span<StyledIconProps>`
  flex: none;
  margin: ${getIconMargin};
  color: ${getIconColor};
  font-size: ${getIconFontSize};
  filter: ${getIconDropShadow};
`

export const StyledText = styled(Text)``

export const StyledTooltip = styled(Tooltip)``
