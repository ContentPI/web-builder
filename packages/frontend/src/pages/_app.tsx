import React, { FC } from 'react'

import GlobalStyle from '~/components/GlobalStyles/GlobalStyles'
import { I18nProvider } from '~/contexts/i18n'

const App: FC<any> = ({ Component, pageProps, locale = 'en' }) => (
  <>
    <GlobalStyle />
    <I18nProvider locale={locale}>
      <Component {...pageProps} />
    </I18nProvider>
  </>
)

// @ts-ignore
App.getInitialProps = async ({ router }: { router: any }) => {
  const { locale } = router.query

  return {
    locale
  }
}

export default App
