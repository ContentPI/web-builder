import { i18n } from '@web-builder/i18n'
import { NextRequest, NextResponse } from 'next/server'

import Config from '~/config'

export async function middleware(req: NextRequest) {
  const { pathname, origin } = req.nextUrl
  const { locale, page, mustRedirect } = i18n({
    path: pathname,
    pages: Config.pages,
    forceRedirection: true,
    ...Config.i18n,
    ...(Config.redirections ?? {})
  })

  if (mustRedirect) {
    return NextResponse.redirect(`${origin}/${locale}/${page}`)
  }

  return NextResponse.next()
}
