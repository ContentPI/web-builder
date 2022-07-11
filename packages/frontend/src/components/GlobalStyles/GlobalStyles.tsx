import { globalStyles, Gray, updateTheme } from '@web-builder/design-system'
import { createGlobalStyle } from 'styled-components'

import Config from '~/config'

const bodyBg = `
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
`

const updatedThemeVars = updateTheme('dark', {
  palette: {
    primary: {
      common: {
        main: Gray.V300
      }
    }
  }
})

let loginBackground = ''

if (Config.theme?.brandColors) {
  loginBackground += `
    &.${Config.site}.login {
      background: linear-gradient(-45deg, ${Config.theme.brandColors.join(', ')});
       ${bodyBg}
    }
  `
}

const GlobalStyle = createGlobalStyle`
  ${globalStyles}
  ${updatedThemeVars}

  body {
    ${loginBackground}
  }
`

export default GlobalStyle
