import {css} from 'styled-components'
import gradients from 'lib/ui/styles/presets/gradients'

type Options = {
  start: string
  end: string
  time: string
}

export default ({start = gradients.primary, end = gradients.primaryFlipped, time}: Options) => css`
  background-size: 100%;
  background-image: ${start};
  position: relative;
  z-index: 0;

  &::before {
    border-radius: inherit;
    background-image: ${end};
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    z-index: -1;
    transition: opacity ${time};
  }

  &:hover {
    &::before {
      opacity: 1;
    }
  }
`
