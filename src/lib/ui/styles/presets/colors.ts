import {convertHexToRGB} from 'lib/helpers'

const createColor = <ColorHex extends string>(colorHex: ColorHex) =>
  [colorHex, convertHexToRGB(colorHex).join(',')] as const

// Neutral
const [gray1, gray1RGB] = createColor('#1b1c22')
const [gray2, gray2RGB] = createColor('#3d404e')
const [gray3, gray3RGB] = createColor('#60657a')
const [gray4, gray4RGB] = createColor('#878ca1')
const [gray5, gray5RGB] = createColor('#a8acbb')
const [gray6, gray6RGB] = createColor('#c9cbd5')
const [gray7, gray7RGB] = createColor('#d4d6dd')
const [gray8, gray8RGB] = createColor('#dfe0e6')
const [gray9, gray9RGB] = createColor('#eaebef')
const [gray10, gray10RGB] = createColor('#f5f5f7')
const [gray11, gray11RGB] = createColor('#FCFCFD')
const [white, whiteRGB] = createColor('#FFFFFF')
const [tintedWhite, tintedWhiteRGB] = createColor('#fdfcf4')

// Home Blue
const [homeBlue, homeBlueRGB] = createColor('#07679f')
const [homeBlue1, homeBlue1RGB] = createColor('#065d8f')
const [homeBlue2, homeBlue2RGB] = createColor('#06527f')
const [homeBlue3, homeBlue3RGB] = createColor('#05486f')
const [homeBlue4, homeBlue4RGB] = createColor('#043e5f')
const [homeBlue5, homeBlue5RGB] = createColor('#032940')
const [homeBlue6, homeBlue6RGB] = createColor('#021f30')
const [homeBlueLight, homeBlueLightRGB] = createColor('#6aa4c5')

// Warm White
const [warmWhite, warmWhiteRGB] = createColor('#fefbf6')
const [warmWhite1, warmWhite1RGB] = createColor('#f7dcab')
const [warmWhite2, warmWhite2RGB] = createColor('#f8e0b5')
const [warmWhite3, warmWhite3RGB] = createColor('#f9e4be')
const [warmWhite4, warmWhite4RGB] = createColor('#fae8c7')
const [warmWhite5, warmWhite5RGB] = createColor('#fbecd1')
const [warmWhite6, warmWhite6RGB] = createColor('#fbefda')
const [warmWhite7, warmWhite7RGB] = createColor('#fcf3e3')
const [warmWhite8, warmWhite8RGB] = createColor('#fdf7ec')
const [warmWhite9, warmWhite9RGB] = createColor('#fefbf6')

// Mirage
const [mirage1, mirage1RGB] = createColor('#161822')
const [mirage2, mirage2RGB] = createColor('#1e202e')
const [mirage3, mirage3RGB] = createColor('#25293a')
const [mirage4, mirage4RGB] = createColor('#2d3146')
const [mirage5, mirage5RGB] = createColor('#353a52')
const [mirage6, mirage6RGB] = createColor('#3d425e')
const [mirage7, mirage7RGB] = createColor('#444a69')
const [mirage8, mirage8RGB] = createColor('#4c5375')
const [mirage9, mirage9RGB] = createColor('#545b81')
const [mirage10, mirage10RGB] = createColor('#5b648d')
const [mirage11, mirage11RGB] = createColor('#868db1')

// Steel Pink
const [steelPink1, steelPink1RGB] = createColor('#d135fc')
const [steelPink2, steelPink2RGB] = createColor('#d548fc')
const [steelPink3, steelPink3RGB] = createColor('#de6ffd')
const [steelPink4, steelPink4RGB] = createColor('#eba9fe')

// Cyan
const [cyan1, cyan1RGB] = createColor('#33e4e4')
const [cyan2, cyan2RGB] = createColor('#8aefef')

// Mango
const [mango1, mango1RGB] = createColor('#ffb32f')
const [mango2, mango2RGB] = createColor('#ffd07d')

// Slate Blue
const [slateBlue1, slateBlue1RGB] = createColor('#988aff')
const [slateBlue2, slateBlue2RGB] = createColor('#a99eff')

// Cerulean
const [cerulean1, cerulean1RGB] = createColor('#0ba3ff')
const [cerulean2, cerulean2RGB] = createColor('#1faaff')
const [cerulean3, cerulean3RGB] = createColor('#6dc8ff')
const [cerulean4, cerulean4RGB] = createColor('#bce6ff')

// Purple Heart
const [purpleHeart, purpleHeartRGB] = createColor('#6619A3')

// Jasmine
const [jasmine, jasmineRGB] = createColor('#FFE596')

// Cerise Pink
const [cerisePink, cerisePinkRGB] = createColor('#E23F7A')

// Rosy Pink
const [rosyPink, rosyPinkRGB] = createColor('#F46C9C')

// Strawberry
const [strawberry, strawberryRGB] = createColor('#f02846')

// Primary
const [aquamarine, aquamarineRGB] = createColor('#55E6C1')
const [blue, blueRGB] = createColor('#005593')

const [red1, red1RGB] = createColor('#ff4f7d')
const [red2, red2RGB] = createColor('#ff638b')

const [yellow, yellowRGB] = createColor('#ffdd33')

// Light
const [aquamarineLight, aquamarineLightRGB] = createColor('#B2EEEA')
const [blueLight, blueLightRGB] = createColor('#91D2F2')
const [orangeLight, orangeLightRGB] = createColor('#FFB869')
const [redLight, redLightRGB] = createColor('#FF8C90')
const [yellowLight, yellowLightRGB] = createColor('#FFDF80')

// Dark
const [aquamarineDarker, aquamarineDarkerRGB] = createColor('#24A59C')
const [aquamarineDark, aquamarineDarkRGB] = createColor('#27B5AB')
const [blueDark, blueDarkRGB] = createColor('#003861')
const [orangeDark, orangeDarkRGB] = createColor('#CF7817')
const [redDark, redDarkRGB] = createColor('#DF2E36')
const [yellowDark, yellowDarkRGB] = createColor('#D9A50B')

// Tints
const [blueTint, blueTintRGB] = createColor('#EBF3FA')
const [orangeTint, orangeTintRGB] = createColor('#FCF3E8')
const [redTint, redTintRGB] = createColor('#FAEAEB')
const [purpleTint, purpleTintRGB] = createColor('#F1EDF8')

// Other
const [aquamarineExtraLight, aquamarineExtraLightRGB] = createColor('#C2F2EE')
const [blueMedium, blueMediumRGB] = createColor('#3883BA')
const [pureBlueDark, pureBlueDarkRGB] = createColor('#000066')
const [green, greenRGB] = createColor('#7AC722')
const [ultramarine, ultramarineRGB] = createColor('#352D7E')
const [purple, purpleRGB] = createColor('#7248B9')
const [violet, violetRGB] = createColor('#7544FF')
const [teal, tealRGB] = createColor('#6633CC')
const [black, blackRGB] = createColor('#000000')

// Brand
const [twitterBlue, twitterBlueRGB] = createColor('#1DA1F2')

export const hexColors = {
  gray1,
  gray2,
  gray3,
  gray4,
  gray5,
  gray6,
  gray7,
  gray8,
  gray9,
  gray10,
  gray11,

  white,
  tintedWhite,

  homeBlue,
  homeBlue1,
  homeBlue2,
  homeBlue3,
  homeBlue4,
  homeBlue5,
  homeBlue6,
  homeBlueLight,

  warmWhite,
  warmWhite1,
  warmWhite2,
  warmWhite3,
  warmWhite4,
  warmWhite5,
  warmWhite6,
  warmWhite7,
  warmWhite8,
  warmWhite9,

  slateBlue1,
  slateBlue2,

  cerulean1,
  cerulean2,
  cerulean3,
  cerulean4,

  steelPink1,
  steelPink2,
  steelPink3,
  steelPink4,

  purpleHeart,

  jasmine,

  cerisePink,

  rosyPink,

  strawberry,

  mirage1,
  mirage2,
  mirage3,
  mirage4,
  mirage5,
  mirage6,
  mirage7,
  mirage8,
  mirage9,
  mirage10,
  mirage11,

  cyan1,
  cyan2,

  aquamarine,
  blue,

  mango1,
  mango2,

  red1,
  red2,

  yellow,

  aquamarineLight,
  blueLight,
  orangeLight,
  redLight,
  yellowLight,

  aquamarineDarker,
  aquamarineDark,
  blueDark,
  orangeDark,
  redDark,
  yellowDark,

  blueTint,
  orangeTint,
  redTint,
  purpleTint,

  aquamarineExtraLight,
  blueMedium,
  pureBlueDark,
  green,
  ultramarine,
  purple,
  violet,
  teal,
  black,

  twitterBlue,

  transparent: 'transparent',
} as const

export const rgbColors = {
  gray1RGB,
  gray2RGB,
  gray3RGB,
  gray4RGB,
  gray5RGB,
  gray6RGB,
  gray7RGB,
  gray8RGB,
  gray9RGB,
  gray10RGB,
  gray11RGB,

  whiteRGB,
  tintedWhiteRGB,

  homeBlueRGB,
  homeBlue1RGB,
  homeBlue2RGB,
  homeBlue3RGB,
  homeBlue4RGB,
  homeBlue5RGB,
  homeBlue6RGB,
  homeBlueLightRGB,

  warmWhiteRGB,
  warmWhite1RGB,
  warmWhite2RGB,
  warmWhite3RGB,
  warmWhite4RGB,
  warmWhite5RGB,
  warmWhite6RGB,
  warmWhite7RGB,
  warmWhite8RGB,
  warmWhite9RGB,

  slateBlue1RGB,
  slateBlue2RGB,

  cerulean1RGB,
  cerulean2RGB,
  cerulean3RGB,
  cerulean4RGB,

  steelPink1RGB,
  steelPink2RGB,
  steelPink3RGB,
  steelPink4RGB,

  purpleHeartRGB,

  jasmineRGB,

  cerisePinkRGB,

  rosyPinkRGB,

  strawberryRGB,

  mirage1RGB,
  mirage2RGB,
  mirage3RGB,
  mirage4RGB,
  mirage5RGB,
  mirage6RGB,
  mirage7RGB,
  mirage8RGB,
  mirage9RGB,
  mirage10RGB,
  mirage11RGB,

  cyan1RGB,
  cyan2RGB,

  aquamarineRGB,
  blueRGB,

  mango1RGB,
  mango2RGB,

  red1RGB,
  red2RGB,

  yellowRGB,

  aquamarineLightRGB,
  blueLightRGB,
  orangeLightRGB,
  redLightRGB,
  yellowLightRGB,

  aquamarineDarkerRGB,
  aquamarineDarkRGB,
  blueDarkRGB,
  orangeDarkRGB,
  redDarkRGB,
  yellowDarkRGB,

  blueTintRGB,
  orangeTintRGB,
  redTintRGB,
  purpleTintRGB,

  aquamarineExtraLightRGB,
  blueMediumRGB,
  pureBlueDarkRGB,
  greenRGB,
  ultramarineRGB,
  purpleRGB,
  violetRGB,
  tealRGB,
  blackRGB,

  twitterBlueRGB,
} as const

export const colors = {
  ...hexColors,
  ...rgbColors,
}