import {createGlobalStyle} from 'styled-components'
import {colors, fonts} from 'lib/ui/styles'

export const Typography = createGlobalStyle`
  /**
   * 1. Optimize text rendering for legibility
   * 2. Enable font smoothing in Chrome, Firefox, Safari
   * 3. Enable font kerning
   * 4. Set base font styles
   * 5. Set base link styles
   */
  body {
    color: ${colors.black};
    text-rendering: optimizeLegibility; // 1
    -webkit-font-smoothing: antialiased; // 2
    -moz-osx-font-smoothing: grayscale; // 2
    font-kerning: normal; // 3
    font-family: ${fonts.primary}; // 4
    font-size: 16px; // 4
    font-weight: ${fonts.weight.normal}; // 4
  }

  a {
    cursor: pointer; // 5
    text-decoration: none; // 5
  }
`
