import {useCallback, useState, useEffect} from 'react'
import {HoverProps, UseHoverOptions, useHover} from './useHover'
import {useTimeout} from './useTimeout'
import {usePrevious} from './usePrevious'

/*
 * Starts a timeout for setting the hover state to on
 * but hovers off instantly (or cancels the timeout)
 *
 * Useful for when hovering might cause an expensive operation
 * but theres a high chance that the element could be easily accidentally scanned over by the cursor
 */
export const useDelayedHover = (
  delay: number,
  options: UseHoverOptions = {}
): [boolean, HoverProps] => {
  const [isHovered, hoverProps] = useHover(options)

  const [delayedIsHovered, setDelayedIsHovered] = useState(isHovered)

  const setDelayedIsHoveredTrue = useCallback(() => {
    setDelayedIsHovered(true)
  }, [])
  const {start: startSetDelayedIsHoveredTimeout, stop: stopSetDelayedIsHoveredTimeout} = useTimeout(
    setDelayedIsHoveredTrue,
    delay
  )

  const prevIsHovered = usePrevious(isHovered)
  useEffect(() => {
    if (prevIsHovered !== isHovered) {
      if (isHovered) {
        startSetDelayedIsHoveredTimeout()
      } else {
        stopSetDelayedIsHoveredTimeout()
        setDelayedIsHovered(false)
      }
    }
  }, [prevIsHovered, isHovered, startSetDelayedIsHoveredTimeout, stopSetDelayedIsHoveredTimeout])

  return [delayedIsHovered, hoverProps]
}
