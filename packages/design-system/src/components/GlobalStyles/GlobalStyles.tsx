import { customThemesCssVars, themeRootVars } from '../../theme'
import workSans from './fonts/workSans'

const fontStyles = `
  @font-face {
    font-family: WorkSans;
    font-style: normal;
    font-weight: 400;
    src: url(${workSans});
  }
`

const htmlReset = `
  * {
    outline: none;
  }
  body {
    font-family: WorkSans;
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

const GlobalStyles = `
  ${htmlReset}
  ${fontStyles}
  ${themeRootVars}
  ${customThemesCssVars}
`

export default GlobalStyles
