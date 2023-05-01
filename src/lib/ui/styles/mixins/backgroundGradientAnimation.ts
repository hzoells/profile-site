import {css} from 'styled-components'
import transitions from 'lib/ui/styles/presets/transitions'

export default (borderWidth: string, gradientStart: string, gradientEnd: string) => css`
  z-index: 0;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -${borderWidth};
    left: -${borderWidth};
    width: calc(100% + 2 * ${borderWidth});
    height: calc(100% + 2 * ${borderWidth});
    border-radius: inherit;
    background-size: 110%;
    will-change: opacity;
  }

  /* Start */
  &::before {
    z-index: -1;
    background-image: ${gradientStart};
    opacity: 1;
    transition: opacity ${transitions.duration.short} ${transitions.timing.default};
  }

  /* End */
  &::after {
    z-index: -2;
    background-image: ${gradientEnd};
    opacity: 0;
    transition: opacity ${transitions.duration.short} ${transitions.timing.default};
  }

  &:hover {
    &::before {
      opacity: 0;
    }

    &::after {
      opacity: 1;
    }
  }

  &:active {
    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 0;
    }
  }
`
