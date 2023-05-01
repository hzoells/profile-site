import {css} from 'styled-components'
import breakpoints from 'lib/ui/styles/presets/breakpoints'

import {isNumber} from 'lib/types'

const isValidBreakpoint = (
  breakpoint: 'landscapePhone' | 'tablet' | 'desktop' | 'largeDesktop'
) => {
  if (!breakpoints[breakpoint]) {
    throw Error(`Breakpoint doesnt exist for value ${breakpoint}`)
  }
  return true
}

/*
Usage

  css`
    ...

    ${media('desktop')} {
      ...
    }
  `
 */

export const media = (
  breakpoint: 'landscapePhone' | 'tablet' | 'desktop' | 'largeDesktop' | number
) => {
  const breakpointWidth = isNumber(breakpoint) ? breakpoint : breakpoints[breakpoint]

  return css`
    // Make sure prettier doesn't add a semicolon
    // prettier-ignore
    @media screen and (min-width: ${breakpointWidth}px)
  `
}

export const mediaMax = (breakpoint: 'landscapePhone' | 'tablet' | 'desktop' | 'largeDesktop') =>
  isValidBreakpoint(breakpoint) &&
  css`
    ${breakpoints[breakpoint] && `@media screen and (max-width: ${breakpoints[breakpoint] - 1}px)`}
  `
