import { cx } from '@web-builder/utils'
import Document from 'next/document'
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
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(
              <body className={cx.join('site', Config.site)}>
                <App {...props} title={Config.siteTitle} />
              </body>
            )
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
}
