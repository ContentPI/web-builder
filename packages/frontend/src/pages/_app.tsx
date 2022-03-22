import { AppProps } from 'next/app'
import React, { FC } from 'react'

import GlobalStyle from '~/components/GlobalStyles/GlobalStyles'
import { I18nProvider } from '~/contexts/i18n'

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <I18nProvider locale="en">
      <Component {...pageProps} />
    </I18nProvider>
  </>
)

export default App
