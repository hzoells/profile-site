import {colors} from './colors'

const linear = (deg: number, color1: string, color2: string) =>
  `linear-gradient(${deg}deg, ${color1} 0%, ${color2} 100%)`

const gradients = {
  linear,

  primary: linear(135, colors.homeBlue, colors.homeBlue6),
  primaryFlipped: linear(135, colors.homeBlue6, colors.homeBlue),

  secondary: linear(135, colors.warmWhite, colors.warmWhite9),
  secondaryFlipped: linear(135, colors.warmWhite9, colors.warmWhite),

  tealPurple: 'linear-gradient(157.5deg, #05dae1 10%, #7755c2 90%)',
}

export default gradients
