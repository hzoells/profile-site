import React, {HTMLAttributes, ReactNode, forwardRef, memo} from 'react'

import {text} from 'lib/ui/styles'

import {TooltipPosition} from 'modules/common/components/Tooltip'
import {StyledInfoIcon, StyledRoot, StyledTooltip, StyledTooltipContainer} from './Text.styled'

export type TextFontStyle = keyof typeof text.fontStyle

export type TextFontWeight = keyof typeof text.fontWeight

export type TextTextAlign = keyof typeof text.textAlign

export type TextTextTransform = keyof typeof text.textTransform

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'h7'
  | 'body'
  | 'sm'
  | 'xs'
  | 'xxs'

export type TextElement = HTMLSpanElement

export interface TextProps
  extends Omit<HTMLAttributes<TextElement>, 'dangerouslySetInnerHTML'>,
    Omit<HTMLAttributes<TextElement>, 'color' | 'dangerouslySetInnerHTML'> {
  children?: ReactNode
  className?: string
  color?: string
  fontStyle?: TextFontStyle
  fontWeight?: TextFontWeight
  htmlFor?: string
  infoTooltipContent?: ReactNode
  infoTooltipPosition?: TooltipPosition
  infoTooltipText?: string
  lineHeight?: number
  lineLimit?: number
  textAlign?: TextTextAlign
  textTransform?: TextTextTransform
  variant?: TextVariant
}

export const Text = forwardRef<TextElement, TextProps>((props: TextProps, ref) => {
  const {
    children,
    className,
    color,
    fontStyle,
    fontWeight,
    htmlFor,
    infoTooltipContent,
    infoTooltipPosition,
    infoTooltipText,
    lineHeight,
    lineLimit = 0,
    textAlign,
    textTransform,
    variant,
    ...restProps
  } = props

  const rootEl = (
    <StyledRoot
      as={htmlFor ? 'label' : 'span'}
      className={!infoTooltipContent && !infoTooltipText ? className : undefined}
      color={color}
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      htmlFor={htmlFor}
      lineHeight={lineHeight}
      lineLimit={lineLimit}
      ref={ref}
      textAlign={textAlign}
      textTransform={textTransform}
      variant={variant}
      {...restProps}
    >
      {children}
    </StyledRoot>
  )

  if (infoTooltipContent || infoTooltipText) {
    return (
      <StyledTooltipContainer className={className}>
        {rootEl}

        <StyledTooltip
          content={infoTooltipContent}
          position={infoTooltipPosition}
          text={infoTooltipText}
        >
          <StyledInfoIcon />
        </StyledTooltip>
      </StyledTooltipContainer>
    )
  }

  return rootEl
})

export default memo(Text)
