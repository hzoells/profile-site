import {createGlobalStyle} from 'styled-components'

export const Layout = createGlobalStyle`
  /**
   * 1. Include padding and border in element sizing
   * 2. Make <body> occupy at least 100% of screen height
   * 3. Viewport is scalable and at least 360px wide (Galaxy S5) (https://gs.statcounter.com/screen-resolution-stats/mobile/worldwide)
   * 4. Stretch <html> to fill screen height
   * 5. IE11 fix for flex (https://stackoverflow.com/a/42930574)
   */
  html {
    box-sizing: border-box; // 1.
    display: flex; // 2.
    flex-direction: column; // 2.
    min-width: 0; // 3.
    min-height: 100%; // 4.
    height: 0; // 5.
  }

  *, *::before, *::after {
    box-sizing: inherit; // 1.
  }

  /**
   * 1. Stretch to fill screen height, allow children to do the same
   * 2. Force scrollbar always
   * 3. Scroll smoothly
   */
  body {
    flex: 1 0 auto; // 1.
    display: flex; // 1.
    flex-direction: column; // 1.
  }

  #__next, #main, #app {
    flex: 1 0 auto; // 1.
    display: flex; // 1.
    flex-direction: column; // 1.
  }
`
