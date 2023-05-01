import React, {
  HTMLAttributes,
  ReactNode,
  RefObject,
  forwardRef,
  memo,
  useCallback,
  useRef,
  useState,
} from 'react'

import {getOwnerWindow} from 'lib/helpers'

import {useDelayedHover, useEnhancedEffect, useForkRef} from 'modules/common/hooks'

import Portal from 'modules/common/components/Portal'
import {TooltipTransition} from './components'
import {
  StyledRoot,
  StyledTooltipContainer,
  StyledBubblePointerContainer,
  StyledBubblePointer,
  StyledTooltipText,
} from './Tooltip.styled'

const getTooltipIdealLeft = (
  position: TooltipPosition,
  anchorContainer: HTMLElement,
  tooltipContainer: HTMLElement,
  spacing: number
) => {
  const anchorContainerRect = anchorContainer.getBoundingClientRect()

  switch (position) {
    case 'bottom':
    case 'top':
      return (
        anchorContainerRect.right -
        anchorContainer.offsetWidth / 2 -
        tooltipContainer.offsetWidth / 2
      )

    case 'left':
      return anchorContainerRect.left - tooltipContainer.offsetWidth - spacing

    case 'right':
      return anchorContainerRect.right + spacing
  }
}

const getTooltipIdealTop = (
  position: TooltipPosition,
  anchorContainer: HTMLElement,
  tooltipContainer: HTMLElement,
  spacing: number
) => {
  const anchorContainerRect = anchorContainer.getBoundingClientRect()

  switch (position) {
    case 'bottom':
      return anchorContainerRect.bottom + spacing

    case 'left':
    case 'right':
      return (
        anchorContainerRect.bottom -
        anchorContainer.offsetHeight / 2 -
        tooltipContainer.offsetHeight / 2
      )

    case 'top':
      return anchorContainerRect.top - tooltipContainer.offsetHeight - spacing
  }
}

const getTransformOrigin = (position: TooltipPosition) => {
  switch (position) {
    case 'bottom':
      return 'center top'

    case 'top':
      return 'center bottom'
  }
}

export type TooltipPosition = 'bottom' | 'left' | 'right' | 'top'

export interface TooltipProps extends Omit<HTMLAttributes<HTMLElement>, 'content' | 'dangerouslySetInnerHTML'> {
  children: ReactNode
  className?: string
  color?: string
  content?: ReactNode
  isDisabled?: boolean
  isHiddenWhenClicked?: boolean
  position?: TooltipPosition
  spacing?: number
  text?: string
}

export const Tooltip = forwardRef<HTMLElement, TooltipProps>((props: TooltipProps, ref) => {
  const {
    children,
    className,
    color = 'mirage6',
    content,
    isDisabled = false,
    isHiddenWhenClicked = true,
    position = 'top',
    spacing = 8,
    text,
    ...restProps
  } = props

  const rootRef = useRef<HTMLElement | null>(null)
  const forkRef = useForkRef(ref, rootRef)

  const [isExited, setIsExited] = useState(true)
  const [tooltipLeft, setTooltipLeft] = useState(0)
  const [tooltipTop, setTooltipTop] = useState(0)
  const [offsetX, setOffsetX] = useState(0)

  const handleMouseEnter = useCallback(() => {
    setIsExited(false)
  }, [])

  const [isHovered, hoverProps] = useDelayedHover(500, {
    onMouseEnter: handleMouseEnter,
  })

  const tooltipContainerRef = useRef<HTMLElement | null>(null)

  const setPosition = useCallback(() => {
    if (rootRef.current && tooltipContainerRef.current) {
      const anchorContainerElement = rootRef.current
      const tooltipContainerElement = tooltipContainerRef.current

      // Find the ideal position for the tooltip
      let left = getTooltipIdealLeft(
        position,
        anchorContainerElement,
        tooltipContainerElement,
        spacing
      )
      let top = getTooltipIdealTop(
        position,
        anchorContainerElement,
        tooltipContainerElement,
        spacing
      )
      const right = left + tooltipContainerElement.offsetWidth
      const bottom = top + tooltipContainerElement.offsetHeight

      left += window.pageXOffset
      top += window.pageYOffset

      // Find window dimensions
      const ownerWindow = getOwnerWindow(anchorContainerElement)
      const widthThreshold = ownerWindow.innerWidth - spacing
      const heightThreshold = ownerWindow.innerHeight - spacing

      let offsetX = 0

      // Ensure tooltip is positioned horizontally within the window including margin
      if (left < spacing) {
        offsetX = left - spacing
        left -= offsetX
      } else if (right > widthThreshold) {
        offsetX = right - widthThreshold
        left -= offsetX
      }

      // Ensure tooltip is positioned vertically within the window including margin
      if (top < spacing) {
        const diff = top - spacing
        top -= diff
      } else if (bottom > heightThreshold) {
        const diff = bottom - heightThreshold
        top -= diff
      }

      setTooltipLeft(left)
      setTooltipTop(top)
      setOffsetX(offsetX)
    }
  }, [position, spacing])

  const handleEnter = useCallback(
    (node: any) => {
      tooltipContainerRef.current = node
      setPosition()
    },
    [setPosition]
  )

  const handleExited = useCallback(() => {
    if (isHiddenWhenClicked) {
      setIsExited(true)
    }
  }, [isHiddenWhenClicked])

  useEnhancedEffect(() => {
    setPosition()
  }, [text, setPosition])

  const hasLightBackground = ['cyan1', 'orange1', 'white'].includes(color)

  return (
    <StyledRoot
      className={className}
      onClick={handleExited}
      ref={forkRef as RefObject<HTMLDivElement>}
      {...hoverProps}
      {...restProps}
    >
      {children}

      {!isDisabled && !isExited && (
        <Portal>
          <TooltipTransition
            isIn={isHovered}
            onEnter={handleEnter}
            onExited={handleExited}
            style={{
              transformOrigin: getTransformOrigin(position),
            }}
          >
            <StyledTooltipContainer
              color={color}
              offsetX={offsetX}
              position={position}
              style={{
                left: tooltipLeft,
                top: tooltipTop,
              }}
            >
              <StyledBubblePointerContainer offsetX={offsetX} position={position}>
                <StyledBubblePointer color={color} position={position} />
              </StyledBubblePointerContainer>

              {text ? (
                <StyledTooltipText color={hasLightBackground ? 'mirage1' : 'white'}>
                  {text}
                </StyledTooltipText>
              ) : (
                content
              )}
            </StyledTooltipContainer>
          </TooltipTransition>
        </Portal>
      )}
    </StyledRoot>
  )
})

export default memo(Tooltip)
