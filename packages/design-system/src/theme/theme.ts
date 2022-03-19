import Theme from '../types'
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

export default theme
