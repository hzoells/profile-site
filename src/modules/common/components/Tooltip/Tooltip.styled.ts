import {
  BUBBLE_POINTER_HEIGHT,
  BUBBLE_POINTER_WIDTH,
} from 'modules/common/components/BubblePointer/constants'

import styled from 'styled-components'
import {borders, colors, zIndex} from 'lib/ui/styles'

import BubblePointer from 'modules/common/components/BubblePointer'

import type {TooltipPosition} from './Tooltip'

export const StyledRoot = styled.div`
  display: inline-flex;
  position: relative;
`

interface StyledTooltipContainerProps {
  color: string
  offsetX: number
  position: TooltipPosition
}

const getTooltipContainerBackgroundColor = (props: StyledTooltipContainerProps) => {
  const {color} = props

  if (color) {
    const colorHex = (colors as any)[color]

    return colorHex ? colorHex : color
  }

  return colors.black
}

export const StyledTooltipContainer = styled.div<StyledTooltipContainerProps>`
  z-index: ${zIndex.highest};
  position: absolute;
  display: flex;
  padding: 8px 12px;
  max-width: 300px;
  border-radius: ${borders.radius.sm};
  box-shadow: 0 0 4px rgba(${colors.whiteRGB}, 0.05), 0 6px 16px rgba(${colors.whiteRGB}, 0.2);
  background-color: ${getTooltipContainerBackgroundColor};
  pointer-events: none;
`

interface StyledBubblePointerContainerProps {
  offsetX: number
  position: TooltipPosition
}

const getBubblePointerContainerTop = (props: StyledBubblePointerContainerProps) => {
  const {position} = props

  return {
    bottom: 0,
    left: '50%',
    right: '50%',
    top: '100%',
  }[position]
}

const getBubblePointerContainerLeft = (props: StyledBubblePointerContainerProps) => {
  const {offsetX, position} = props

  return {
    bottom: `calc(50% + ${offsetX}px)`,
    left: `calc(100% + ${offsetX}px)`,
    right: `${offsetX}px`,
    top: `calc(50% + ${offsetX}px)`,
  }[position]
}

export const StyledBubblePointerContainer = styled.div<StyledBubblePointerContainerProps>`
  position: absolute;
  top: ${getBubblePointerContainerTop};
  left: ${getBubblePointerContainerLeft};
  width: 0;
  height: 0;
`

interface StyledBubblePointerProps {
  color: string
  position: TooltipPosition
}

const getBubblePointerTop = (props: StyledBubblePointerProps) => {
  const {position} = props

  return {
    bottom: '1px',
    left: '0',
    right: '0',
    top: '-1px',
  }[position]
}

const getBubblePointerTransform = (props: StyledBubblePointerProps) => {
  const {position} = props

  return {
    bottom: `translate(-50%, ${
      -50 + -50 * (BUBBLE_POINTER_WIDTH / BUBBLE_POINTER_HEIGHT)
    }%) rotate(90deg)`,
    left: 'translate(0, -50%) rotate(180deg)',
    right: 'translate(-100%, -50%)',
    top: `translate(-50%, ${
      -50 + 50 * (BUBBLE_POINTER_WIDTH / BUBBLE_POINTER_HEIGHT)
    }%) rotate(270deg)`,
  }[position]
}

const getBubblePointerColor = (props: StyledBubblePointerProps) => {
  const {color} = props

  if (color) {
    const colorHex = (colors as any)[color]

    return colorHex ? colorHex : color
  }

  return colors.black
}

export const StyledBubblePointer = styled(BubblePointer)<StyledBubblePointerProps>`
  position: absolute;
  top: ${getBubblePointerTop};
  transform: ${getBubblePointerTransform};
  font-size: 12px;
  color: ${getBubblePointerColor};
`

interface StyledTooltipTextProps {
  color: string
}

const getTooltipTextColor = (props: StyledTooltipTextProps) => {
  const {color} = props

  if (color) {
    const colorHex = (colors as any)[color]

    return colorHex ? colorHex : color
  }

  return 'inherit'
}

export const StyledTooltipText = styled.span<StyledTooltipTextProps>`
  color: ${getTooltipTextColor};
  font-size: 13px;
  font-weight: 500;
  white-space: pre-wrap;
`
