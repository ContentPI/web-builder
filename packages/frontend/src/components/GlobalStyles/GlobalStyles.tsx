import { globalStyles } from '@web-builder/design-system'
import { createGlobalStyle } from 'styled-components'

import { Site } from '~/types'

const bodyBg = `
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
`
const GlobalStyle = createGlobalStyle`
  ${globalStyles}

  body {
    &.${Site.SanPancho}.login {
      background: linear-gradient(-45deg, #465f95, #537f6b, #ffcd44, #7f7171);
      ${bodyBg}
    }

    &.${Site.CodeJobs}.login {
      background: linear-gradient(-45deg, #00325a, #027ac1, #222, #bdbdbd);
      ${bodyBg}
    }
  }
`

export default GlobalStyle
