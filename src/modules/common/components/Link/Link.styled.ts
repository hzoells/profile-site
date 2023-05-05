import styled from 'styled-components'
import {colors, transitions} from 'lib/ui/styles'

import Text from 'modules/common/components/Text'
import {LinkBase} from './components'

import type {LinkIconSize, LinkTextSize} from './Link'

export const StyledRoot = styled(LinkBase)`
  display: inline-flex;
  gap: 4px;
  align-items: center;
`

interface StyledIconProps {
  iconColor: string
  iconSize: LinkIconSize
  isIconActiveEnabled: boolean
}

const getIconFontSize = (props: StyledIconProps) => {
  const {iconSize} = props

  return {
    xs: '12px',
    sm: '16px',
    md: '20px',
    lg: '24px',
    xl: '30px',
  }[iconSize]
}

const getIconColor = (props: StyledIconProps) => {
  const {iconColor} = props

  if (iconColor) {
    const colorHex = (colors as any)[iconColor]

    return colorHex ? colorHex : iconColor
  }

  return 'inherit'
}

export const StyledIcon = styled.span<StyledIconProps>`
  flex: none;
  color: ${getIconColor};
  font-size: ${getIconFontSize};
  transition: color ${transitions.duration.xs} ${transitions.timing.default};
`

interface StyledTextContainerProps {
  isTextActiveEnabled: boolean
}

const getTextContainerHoverFocusAfterTransform = (props: StyledTextContainerProps) => {
  const {isTextActiveEnabled} = props

  if (!isTextActiveEnabled) {
    return undefined
  }

  // Using scaleY(1) causes the width to increase by ~1px at the end of the transition for
  // seemingly absolutely no reason.
  return 'scaleY(0.999)'
}

export const StyledTextContainer = styled.span<StyledTextContainerProps>`
  z-index: 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${colors.white};
    transform-origin: bottom right;
    transition: transform 1s ease-out;
  }

  ${StyledRoot}:hover &,
  ${StyledRoot}:focus & {
    &::after {
      transform: ${getTextContainerHoverFocusAfterTransform};
    }
  }
`

interface StyledTextProps {
  textColor: string
  textSize: LinkTextSize
}

const getTextFontSize = (props: StyledTextProps) => {
  const {textSize} = props

  return {
    sm: '12px',
    md: '16px',
    lg: '18px',
  }[textSize]
}

const getTextColor = (props: StyledTextProps) => {
  const {textColor} = props

  if (textColor) {
    const colorHex = (colors as any)[textColor]

    return colorHex ? colorHex : textColor
  }

  return 'inherit'
}

export const StyledText = styled(Text)<StyledTextProps>`
  font-size: ${getTextFontSize};
  line-height: 1.5;
  color: ${getTextColor};
`
