import {MouseEvent, useCallback, useState} from 'react'

export interface HoverProps {
  onMouseEnter: (event: MouseEvent) => void
  onMouseLeave: (event: MouseEvent) => void
}

export interface UseHoverOptions extends Partial<HoverProps> {}

export const useHover = (options: UseHoverOptions = {}): [boolean, HoverProps] => {
  const {onMouseEnter, onMouseLeave} = options
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = useCallback(
    (event: MouseEvent) => {
      setIsHovered(true)

      if (typeof onMouseEnter !== 'undefined') {
        onMouseEnter(event)
      }
    },
    [onMouseEnter]
  )

  const handleMouseLeave = useCallback(
    (event: MouseEvent) => {
      setIsHovered(false)

      if (typeof onMouseLeave !== 'undefined') {
        onMouseLeave(event)
      }
    },
    [onMouseLeave]
  )

  return [
    isHovered,
    {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  ]
}
