import { globalStyles } from '@web-builder/design-system'
import { createGlobalStyle } from 'styled-components'

import { Site } from '~/types'

const GlobalStyle = createGlobalStyle`
  ${globalStyles}

  body {
    &.${Site.SanPancho} {
      background: linear-gradient(-45deg, #465f95, #537f6b, #ffcd44, #7f7171);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
      height: 100vh;
    }

    &.${Site.CodeJobs} {
      background: linear-gradient(-45deg, #00325a, #027ac1, #222, #bdbdbd);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
      height: 100vh;
    }
  }
`

export default GlobalStyle
