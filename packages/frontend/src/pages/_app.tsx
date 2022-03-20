import { AppProps } from 'next/app'
import Head from 'next/head'
import React, { FC } from 'react'

import GlobalStyle from '~/components/GlobalStyles/GlobalStyles'

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>San Pancho</title>
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
)

export default App
