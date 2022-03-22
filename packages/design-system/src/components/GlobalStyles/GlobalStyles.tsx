import { customThemesCssVars, themeRootVars } from '../../theme'
import poppins from './fonts/poppins'

const fontStyles = `
  @font-face {
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    src: url(${poppins});
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

const keyframes = `
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

const GlobalStyles = `
  ${htmlReset}
  ${fontStyles}
  ${keyframes}
  ${themeRootVars}
  ${customThemesCssVars}
`

export default GlobalStyles
