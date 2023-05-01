// RGBToHex

const componentToHex = (c: any) => {
  const hex = c.toString(16)
  return hex.length === 1 ? `0${hex}` : hex
}

export const RGBToHex = (r: any, g: any, b: any) =>
  `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`

// hexToRGB

export const hexToRGB = (hex: any): string => {
  if (hex.length === 4) hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`
    : ''
}

// Lighten/darken

const LightenDarkenHex = (hex: any, amt: any) => {
  let usePound = false

  if (hex[0] === '#') {
    hex = hex.slice(1)
    usePound = true
  }

  const num = parseInt(hex, 16)

  let r = (num >> 16) + amt

  if (r > 255) r = 255
  else if (r < 0) r = 0

  let b = ((num >> 8) & 0x00ff) + amt

  if (b > 255) b = 255
  else if (b < 0) b = 0

  let g = (num & 0x0000ff) + amt

  if (g > 255) g = 255
  else if (g < 0) g = 0

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

export const lighten = (hex: any, amt: any) => LightenDarkenHex(hex, amt)

export const darken = (hex: any, amt: any) => LightenDarkenHex(hex, -amt)
