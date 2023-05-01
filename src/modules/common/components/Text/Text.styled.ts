import styled, {css} from 'styled-components'
import {colors, text} from 'lib/ui/styles'

import Tooltip from 'modules/common/components/Tooltip'
import {Info} from 'modules/common/icons'

import type {
  TextFontStyle,
  TextFontWeight,
  TextTextAlign,
  TextTextTransform,
  TextVariant,
} from './Text'

interface StyledRootProps {
  color?: string
  fontStyle?: TextFontStyle
  fontWeight?: TextFontWeight
  lineHeight?: number
  lineLimit: number
  textAlign?: TextTextAlign
  textTransform?: TextTextTransform
  variant?: TextVariant
}

const getRootVariantStyles = (props: StyledRootProps) => {
  const {variant} = props

  if (typeof variant === 'undefined') {
    return css``
  }

  return {
    h1: css`
      font-family: ${text.fontFamily.primary};
      font-size: 48px;
      font-weight: ${text.fontWeight.bold};
    `,
    h2: css`
      font-family: ${text.fontFamily.primary};
      font-size: 40px;
      font-weight: ${text.fontWeight.bold};
    `,
    h3: css`
      font-family: ${text.fontFamily.primary};
      font-size: 32px;
      font-weight: ${text.fontWeight.bold};
    `,
    h4: css`
      font-family: ${text.fontFamily.primary};
      font-size: 24px;
      font-weight: ${text.fontWeight.bold};
    `,
    h5: css`
      font-family: ${text.fontFamily.primary};
      font-size: 20px;
      font-weight: ${text.fontWeight.bold};
    `,
    h6: css`
      font-family: ${text.fontFamily.primary};
      font-size: 18px;
      font-weight: ${text.fontWeight.bold};
    `,
    h7: css`
      font-family: ${text.fontFamily.primary};
      font-size: 16px;
      font-weight: ${text.fontWeight.bold};
    `,
    body: css`
      font-size: 16px;
    `,
    sm: css`
      font-size: 14px;
    `,
    xs: css`
      font-size: 13px;
    `,
    xxs: css`
      font-size: 12px;
    `,
  }[variant]
}

const getRootOverrideStyles = (props: StyledRootProps) => {
  const {color, fontStyle, fontWeight, textAlign, textTransform} = props

  return css`
    ${typeof color !== 'undefined' ? `color: ${(colors as any)[color] ?? color};` : ''}
    ${typeof fontStyle !== 'undefined' ? `font-style: ${text.fontStyle[fontStyle]};` : ''}
    ${typeof fontWeight !== 'undefined' ? `font-weight: ${text.fontWeight[fontWeight]};` : ''}
    ${typeof textAlign !== 'undefined' ? `text-align: ${text.textAlign[textAlign]};` : ''}
    ${typeof textTransform !== 'undefined'
      ? `text-transform: ${text.textTransform[textTransform]};`
      : ''}
  `
}

const getRootLineLimitStyles = (props: StyledRootProps) => {
  const {lineLimit} = props

  return (
    lineLimit > 0 &&
    css`
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${lineLimit};
      overflow: hidden;
    `
  )
}

const getRootWordBreak = (props: StyledRootProps) => {
  const {lineLimit} = props

  // Allow single line text to show as many characters as possible
  return lineLimit === 1 ? 'break-all' : 'break-word'
}

const getLineHeight = (props: StyledRootProps) => {
  const {lineHeight, variant} = props

  if (lineHeight) {
    return lineHeight
  }

  if (variant && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(variant)) {
    return 1.3
  }

  return 1.5
}

export const StyledTooltipContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

export const StyledRoot = styled.span<StyledRootProps>`
  // Apply variant
  ${getRootVariantStyles};

  // Apply overrides
  ${getRootOverrideStyles};

  // Apply line limit
  ${getRootLineLimitStyles};

  word-break: ${getRootWordBreak};
  line-height: ${getLineHeight};
  white-space: pre-wrap;
`

export const StyledTooltip = styled(Tooltip)``

export const StyledInfoIcon = styled(Info)`
  color: ${colors.gray5};
  font-size: 18px;
`
