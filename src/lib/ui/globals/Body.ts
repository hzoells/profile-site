import {createGlobalStyle} from 'styled-components'
import {colors} from '../styles'

export const Body = createGlobalStyle`
  /**
   * 1. Remove unwanted highlighting caused by taps on mobile
   * 2. Set base document styles
   */
  body {
    background-color: ${colors.warmWhite8};
    -webkit-tap-highlight-color: transparent; // 1
  }

  *, *::before, *::after {
    outline: none; // 2
  }
`
