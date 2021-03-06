import { ApolloProvider } from '@apollo/client'
import { I18nProvider } from '@web-builder/i18n'
import React, { FC } from 'react'

import GlobalStyle from '~/components/GlobalStyles/GlobalStyles'
import Config from '~/config'
import { useApollo } from '~/contexts/apolloClient'
import FormProvider from '~/contexts/form'
import UserProvider from '~/contexts/user'

const App: FC<any> = ({ Component, pageProps, locale = Config.i18n.defaultLocale }) => {
  const apolloClient = useApollo((pageProps && pageProps.initialApolloState) || {})

  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={apolloClient}>
        <I18nProvider locale={locale}>
          <UserProvider>
            <FormProvider>
              <Component {...pageProps} />
            </FormProvider>
          </UserProvider>
        </I18nProvider>
      </ApolloProvider>
    </>
  )
}

// @ts-ignore
App.getInitialProps = async ({ router }: { router: any }) => {
  const { locale } = router.query

  return {
    locale
  }
}

export default App
