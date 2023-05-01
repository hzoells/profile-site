import type {RGB} from 'lib/types'

export const convertRGBToHex = (rgb: RGB) => {
  const [red, green, blue] = rgb

  const redHexComponent = convertRGBComponentToHexComponent(red)
  const greenHexComponent = convertRGBComponentToHexComponent(green)
  const blueHexComponent = convertRGBComponentToHexComponent(blue)

  return `#${redHexComponent}${greenHexComponent}${blueHexComponent}`
}

const convertRGBComponentToHexComponent = (rgbComponent: number) => {
  const hexComponent = rgbComponent.toString(16)
  return hexComponent.length === 1 ? `0${hexComponent}` : hexComponent
}
