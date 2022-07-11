import { getCurrentLocale, getCurrentPage, getUserLanguage, i18n } from '@web-builder/i18n'
import { cookies } from '@web-builder/utils'
import { NextRequest, NextResponse } from 'next/server'

import Config from '~/config'

export async function middleware(req: NextRequest) {
  const { pathname, origin } = req.nextUrl

  const userLanguageCookie = cookies.get('userLanguage', req.headers.get('cookie'))
  const userLanguage =
    userLanguageCookie ??
    getUserLanguage(req.headers.get('accept-language') || '', Config.i18n.locales)
  const originalLocale = getCurrentLocale(pathname, Config.i18n.locales, true)

  const { locale, page, mustRedirect } = i18n({
    path: pathname,
    pages: Config.pages,
    forceRedirection: true,
    ...Config.i18n,
    ...(Config.redirections ?? {})
  })

  const currentPage = getCurrentPage(pathname, Config.pages, true)

  if (currentPage === '/' && !originalLocale) {
    return NextResponse.redirect(`${origin}/${userLanguage}/${page}`)
  }

  if (mustRedirect) {
    return NextResponse.redirect(`${origin}/${locale}/${page}`)
  }

  return NextResponse.next()
}
