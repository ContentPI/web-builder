import { createGlobalStyle, css } from 'styled-components'

const htmlReset = css`
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

const globalStyles = css`
  body {
    background-color: red;
    font-family: WorkSans;
  }
`

const GlobalStyle = createGlobalStyle`
  ${htmlReset}
  ${globalStyles}
`

export default GlobalStyle
