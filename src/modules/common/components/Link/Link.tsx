import React, {ComponentType, memo} from 'react'

import {text} from 'lib/ui/styles'

import {StyledRoot, StyledIcon, StyledTextContainer, StyledText} from './Link.styled'

import {LinkBaseProps} from './components/LinkBase'

export type LinkIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type LinkTextSize = 'sm' | 'md' | 'lg'

export interface LinkProps extends Partial<LinkBaseProps> {
  className?: string
  fontWeight?: keyof typeof text.fontWeight
  icon?: ComponentType<any>
  iconColor?: string
  iconSize?: LinkIconSize
  isActiveEnabled?: boolean
  text?: string
  textColor?: string
  textLineLimit?: number
  textSize?: LinkTextSize
}

export const Link = (props: LinkProps) => {
  const {
    className,
    fontWeight = 'medium',
    icon,
    iconColor = 'accentBlue',
    iconSize = 'md',
    isActiveEnabled = true,
    text,
    textColor = 'accentBlue',
    textLineLimit,
    textSize = 'md',
    ...restProps
  } = props

  return (
    <StyledRoot className={className} {...restProps}>
      {icon && (
        <StyledIcon
          as={icon}
          iconColor={iconColor}
          iconSize={iconSize}
          isIconActiveEnabled={isActiveEnabled && !text}
        />
      )}

      {text && (
        <StyledTextContainer isTextActiveEnabled={isActiveEnabled}>
          <StyledText
            fontWeight={fontWeight}
            lineLimit={textLineLimit}
            textColor={textColor}
            textSize={textSize}
          >
            {text}
          </StyledText>
        </StyledTextContainer>
      )}
    </StyledRoot>
  )
}

export default memo(Link)
