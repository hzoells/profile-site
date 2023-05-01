import type {RGB} from 'lib/types'

export const convertHexToRGB = (hex: string): RGB => {
  if (hex.length === 4) {
    hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
  }

  let redRGBComponent = 0
  let greenRGBComponent = 0
  let blueRGBComponent = 0

  const hexComponents = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  if (hexComponents) {
    const [, redHexComponent, greenHexComponent, blueHexComponent] = hexComponents

    redRGBComponent = convertHexComponentToRGBComponent(redHexComponent)
    greenRGBComponent = convertHexComponentToRGBComponent(greenHexComponent)
    blueRGBComponent = convertHexComponentToRGBComponent(blueHexComponent)
  }

  return [redRGBComponent, greenRGBComponent, blueRGBComponent]
}

const convertHexComponentToRGBComponent = (hexComponent: string) => parseInt(hexComponent, 16)
