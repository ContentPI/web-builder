import { createGlobalStyle, css } from 'styled-components'

import { customThemesCssVars, themeRootVars } from '../src/theme'
import PoppinsRegularWoff from './fonts/poppins-regular.woff'
import PoppinsRegularWoff2 from './fonts/poppins-regular.woff2'

const fontStyles = css`
  @font-face {
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    src: url('${PoppinsRegularWoff}') format('woff'), url('${PoppinsRegularWoff2}') format('woff2');
  }
`

const htmlReset = `
  * {
    outline: none;
  }
  body {
    font-family: Poppins;
    margin: 0;
    padding: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }
`

const GlobalStyles = createGlobalStyle`
  ${htmlReset}
  ${fontStyles}
  ${themeRootVars}
  ${customThemesCssVars}
`

export default GlobalStyles
