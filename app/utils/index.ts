import { parseToHsla, toHex } from 'color2k'

type colorScheme = {
  [key: string]: string
}

const convertCssToHex = (cssValue: string) => {
  const [h, s, l] = cssValue.split(' ').map(Number)
  return toHex({ h, s: s / 100, l: l / 100 })
}
