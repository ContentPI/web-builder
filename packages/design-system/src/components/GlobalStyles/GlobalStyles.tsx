import WorkSansRegularWoff from '../../fonts/worksans/worksans-regular.woff'
import WorkSansRegularWoff2 from '../../fonts/worksans/worksans-regular.woff2'
import { customThemesCssVars, themeRootVars } from '../../theme'

const fontStyles = `
  @font-face {
    font-family: 'WorkSans';
    font-style: normal;
    font-weight: 400;
    src: url('${WorkSansRegularWoff}') format('woff'),
      url('${WorkSansRegularWoff2}') format('woff2');
  }
`

const htmlReset = `
  * {
    outline: none;
  }
  body {
    font-family: 'WorkSans';
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
