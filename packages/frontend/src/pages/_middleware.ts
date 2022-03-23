import { getUrlInfo } from '@web-builder/localization'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const { pathname, origin } = req.nextUrl
  const { locale, page, mustRedirect } = getUrlInfo(pathname)

  if (mustRedirect) {
    return NextResponse.redirect(`${origin}/${locale}/${page}`)
  }

  return NextResponse.next()
}
