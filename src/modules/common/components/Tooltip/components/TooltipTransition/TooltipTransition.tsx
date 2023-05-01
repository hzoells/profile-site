import React, {
  ReactNode,
  cloneElement,
  forwardRef,
  isValidElement,
  memo,
  useCallback,
  useRef,
} from 'react'

import {ENTERED, ENTERING, EXITED, TransitionStatus} from 'react-transition-group/Transition'

import {formatMs, reflow} from 'lib/helpers'

import {useForkRef} from 'modules/common/hooks'

import {Transition} from 'react-transition-group'

import {AnyFunction, AnyObject, isFunction} from 'lib/types'

const DEFAULT_DURATION = 100
const EASING = 'ease'
const TRANSITION_STYLES: AnyObject = {
  [ENTERING]: {
    transform: 'scale(1)',
    opacity: 1,
  },
  [ENTERED]: {
    transform: 'scale(1)',
    opacity: 1,
  },
}

const setTransitionValue = (element: HTMLElement, duration: number, isExit: boolean = false) => {
  element.style.transition = `
    transform ${formatMs(duration)} ${EASING}
    ${isExit ? `, opacity ${formatMs(duration)} ${EASING}` : ''}
  `
}

export interface TooltipTransitionProps {
  children?: ReactNode
  duration?: number
  isIn?: boolean
  mountOnEnter?: boolean
  onEnter?: AnyFunction
  onEntered?: AnyFunction
  onEntering?: AnyFunction
  onExit?: AnyFunction
  onExited?: AnyFunction
  onExiting?: AnyFunction
  style?: AnyObject
  unmountOnExit?: boolean
}

export const TooltipTransition = forwardRef<HTMLElement, TooltipTransitionProps>(
  (props: TooltipTransitionProps, ref) => {
    const {
      children,
      duration = DEFAULT_DURATION,
      isIn,
      mountOnEnter = true,
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExited,
      onExiting,
      style,
      unmountOnExit = true,
      ...restProps
    } = props

    const elementRef = useRef<HTMLElement | null>(null)
    const forkRef = useForkRef(ref, (children as any)?.ref, elementRef)

    const handleEntering = useCallback(() => {
      if (isFunction(onEntering)) {
        const element = elementRef.current
        onEntering(element)
      }
    }, [onEntering])

    const handleEnter = useCallback(
      (isAppearing: boolean) => {
        const element = elementRef.current

        if (element) {
          reflow(element)
          setTransitionValue(element, duration)

          const keyframes = [
            {transform: 'scale(0.7)'},
            {transform: 'scale(1.04)', offset: 0.6},
            {transform: 'scale(1)'},
          ]
          element.animate(keyframes, duration)
        }

        if (isFunction(onEnter)) {
          onEnter(element, isAppearing)
        }
      },
      [duration, onEnter]
    )

    const handleEntered = useCallback(() => {
      if (isFunction(onEntered)) {
        const element = elementRef.current
        onEntered(element)
      }
    }, [onEntered])

    const handleExiting = useCallback(() => {
      if (isFunction(onExiting)) {
        const element = elementRef.current
        onExiting(element)
      }
    }, [onExiting])

    const handleExit = useCallback(() => {
      const element = elementRef.current

      if (element) {
        setTransitionValue(element, duration, true)
      }

      if (isFunction(onExit)) {
        onExit(element)
      }
    }, [duration, onExit])

    const handleExited = useCallback(() => {
      if (isFunction(onExited)) {
        const element = elementRef.current
        onExited(element)
      }
    }, [onExited])

    return (
      <Transition
        appear
        in={isIn}
        mountOnEnter={mountOnEnter}
        nodeRef={elementRef}
        onEnter={handleEnter}
        onEntered={handleEntered}
        onEntering={handleEntering}
        onExit={handleExit}
        onExited={handleExited}
        onExiting={handleExiting}
        timeout={duration}
        unmountOnExit={unmountOnExit}
        {...restProps}
      >
        {/* @ts-ignore */}
        {(transitionStatus: TransitionStatus, childProps: AnyObject) =>
          isValidElement(children)
            ? cloneElement(children as any, {
                ref: forkRef,
                style: {
                  opacity: 0,
                  transform: 'scale(0.7)',
                  willChange: 'opacity',
                  visibility: transitionStatus === EXITED && !isIn ? 'hidden' : undefined,
                  ...TRANSITION_STYLES[transitionStatus],
                  ...style,
                  ...children.props.style,
                },
                ...childProps,
              })
            : children
        }
      </Transition>
    )
  }
)

export default memo(TooltipTransition)
