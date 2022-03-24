import { I18nProvider, isValidLocale } from '@web-builder/i18n'
import React, { FC } from 'react'

import GlobalStyle from '~/components/GlobalStyles/GlobalStyles'

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
  let newLocale = locale

  if (!isValidLocale(locale as string)) {
    newLocale = 'en'
  }

  return {
    locale: newLocale
  }
}

export default App
