import { AppProps } from 'next/app'
import React, { FC } from 'react'

import GlobalStyle from '~/components/GlobalStyles/GlobalStyles'

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
)

export default App
