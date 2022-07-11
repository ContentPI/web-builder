import { merge } from '@web-builder/utils'

import { Theme } from '../types'
import palette from './palette'
import typography from './typography'
import { generateThemeVars, generateVarNames, getRootVars } from './utils'

const theme: Theme = {
  typography,
  palette
}

export const themeCssVars = generateVarNames({ values: theme })
export const themeRootVars = getRootVars(theme)
export const customThemesCssVars = generateThemeVars({})

export const updateTheme = (updatedTheme: any) => {
  const mergedTheme: Theme = merge(theme, updatedTheme)
  const cssVars = generateThemeVars({ values: mergedTheme })
  const rootVars = getRootVars(mergedTheme)

  return `
    ${cssVars}
    ${rootVars}
  `
}

export default theme
