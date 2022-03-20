import { AppProps } from 'next/app'
import Head from 'next/head'
import React, { FC } from 'react'

import GlobalStyle from '~/components/GlobalStyles/GlobalStyles'

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <GlobalStyle />
      <title>San Pancho</title>
    </Head>

    <Component {...pageProps} />
  </>
)

export default App
