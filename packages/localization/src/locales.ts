export const languagesList: any = {
  ar: {
    name: 'العربية',
    lang: 'ar',
    dir: 'rtl'
  },
  'de-DE': {
    name: 'Deutsch',
    lang: 'de-DE'
  },
  en: {
    name: 'English (US)',
    lang: 'en',
    enabled: true
  },
  'en-US': {
    name: 'English (US)',
    lang: 'en-US'
  },
  'en-GB': {
    name: 'English (UK)',
    lang: 'en-GB'
  },
  es: {
    name: 'Español',
    lang: 'es',
    enabled: true
  },
  'fr-FR': {
    name: 'Français',
    lang: 'fr-FR'
  },
  'it-IT': {
    name: 'Italiano',
    lang: 'it-IT'
  },
  'pt-BR': {
    name: 'Português (BR)',
    lang: 'pt-BR'
  },
  'pt-PT': {
    name: 'Português (PT)',
    lang: 'pt-PT'
  },
  'ja-JP': {
    name: '日本語',
    lang: 'ja-JP'
  },
  'ko-KR': {
    name: '한국어',
    lang: 'ko-KR'
  },
  'ru-RU': {
    name: 'Русский',
    lang: 'ru-RU'
  },
  'zh-CN': {
    name: '中文（简体）',
    lang: 'zh-CN'
  }
}

const pagesList: Record<string, string> = {
  index: 'index',
  login: 'login'
}

export const isValidLocale = (locale: string) =>
  !!(languagesList[locale] && languagesList[locale].enabled)

export const isValidPage = (page: string) => !!pagesList[page]

export const getUrlInfo = (pathname: string) => {
  // TODO: Set the default locale by configuration

  // Root
  if (!pathname) {
    return {
      locale: 'en',
      page: 'index',
      isInvalidLocale: false
    }
  }

  // Getting the segments [0] = locale [1] = page
  const segments = pathname.split('/').filter((v: string) => v)

  // If is valid locale we add it
  const locale = isValidLocale(segments[0]) ? segments[0] : false

  // Getting the page
  const page = isValidPage(segments[0])
    ? segments[0]
    : isValidPage(segments[1])
    ? segments[1]
    : segments[0] ?? false

  // Validations for valid locales and valid pages
  const equals = locale === page
  const invalidLocale = (equals && !locale) || !locale
  const invalidPage = !equals && !isValidPage(page)
  const validLocale = !invalidLocale
  const validPage = !equals && isValidPage(page)

  // This is for single pages with no locale (/login)
  if (segments.length === 1 && invalidLocale && validPage) {
    return {
      locale: 'en',
      page,
      mustRedirect: true
    }
  }

  // All other paths
  return {
    locale: validLocale ? locale : 'en',
    page: validPage ? page : '',
    mustRedirect: invalidLocale || invalidPage
  }
}
