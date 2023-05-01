import {createGlobalStyle} from 'styled-components'
import {colors} from 'lib/ui/styles'

export const NProgressStyles = createGlobalStyle`
  #nprogress {
    // Make clicks pass-through
    pointer-events: none;

    .bar {
      z-index: 9999;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: ${colors.steelPink1};
    }

    // Fancy blur effect
    .peg {
      position: absolute;
      right: 0;
      transform: rotate(3deg) translateY(-4px);
      display: block;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${colors.steelPink1}, 0 0 5px ${colors.steelPink1};
      opacity: 1;
    }
  }
`
