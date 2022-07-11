import { merge } from '@web-builder/utils'

import { Theme } from '../types'
import darkPalette from './palettes/darkPalette'
import lightPalette from './palettes/lightPalette'
import typography from './typography'
import { generateThemeVars, generateVarNames, getRootVars } from './utils'

const lightTheme: Theme = {
  typography,
  palette: lightPalette
}

const darkTheme: Theme = {
  ...lightPalette,
  palette: darkPalette
}

export const themeCssVars = generateVarNames({ values: lightTheme })
export const customThemesCssVars = generateThemeVars({
  light: lightTheme,
  dark: darkTheme
})

type ThemeName = 'light' | 'dark'

export const updateTheme = (themeName: ThemeName, updatedTheme: any) => {
  const theme = themeName === 'light' ? lightTheme : darkTheme
  const mergedTheme: Theme = merge(theme, updatedTheme)
  const cssVars = generateThemeVars({ light: mergedTheme })
  const rootVars = getRootVars(mergedTheme)

  return `
    ${cssVars}
    ${rootVars}
  `
}

export default {
  lightTheme,
  darkTheme
}
