const font = 'HelveticaNeue, Arial, sans-serif'

// Color palette
const black = '#000000'
const white = '#ffffff'
const fontColorPrimary = white
const fontColorSecondary = black
const bgPrimary = black
const bgButton = black
const error = '#c86464'
const primary = '#c06c84'
const secondary = '#6c5b7b'
const secondaryLight = '#6a6b7b'

const boxShadows = [
  'box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)',
]

const size = {
  xs: 550,
  small: 768,
  med: 992,
  large: 1920,
}

export default {
  size,
  boxShadows,
  font,
  spaces: [0, 4, 8, 16, 32, 64, 70, 84, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 60, 72, 80],
  fontWeights: [
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
  ],
  colors: {
    fontColorPrimary,
    fontColorSecondary,
    bgPrimary,
    bgButton,
    primary,
    secondary,
    secondaryLight,
    black,
    white,
    error,
  },
}
