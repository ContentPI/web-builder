import { getCurrentPage } from '@web-builder/i18n'
import { cx } from '@web-builder/utils'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

import Config from '~/config'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) => {
            const page = getCurrentPage(props.router.asPath, Config.pages)

            return sheet.collectStyles(
              <body className={cx.join(Config.site, page)}>
                <App {...props} title={Config.siteTitle} />
              </body>
            )
          }
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
        </Head>
        <body data-theme="light">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
