export type Locale =
  | 'ar'
  | 'en'
  | 'es'
  | 'fr'
  | 'jp'
  | 'de-DE'
  | 'en-GB'
  | 'en-US'
  | 'es-MX'
  | 'fr-FR'
  | 'it-IT'
  | 'ja-JP'
  | 'ko-KR'
  | 'pt-BR'
  | 'pt-PT'
  | 'ru-RU'
  | 'zh-CN'

export const availableLocales: any = {
  ar: {
    dir: 'rtl',
    lang: 'ar',
    name: 'العربية'
  },
  en: {
    lang: 'en',
    name: 'English'
  },
  es: {
    lang: 'es',
    name: 'Español'
  },
  fr: {
    lang: 'fr',
    name: 'Français'
  },
  jp: {
    lang: 'jp',
    name: '日本語'
  },
  'de-DE': {
    lang: 'de-DE',
    name: 'Deutsch'
  },
  'en-GB': {
    lang: 'en-GB',
    name: 'English (UK)'
  },
  'en-US': {
    lang: 'en-US',
    name: 'English (US)'
  },
  'es-MX': {
    lang: 'es-MX',
    name: 'Español (MX)'
  },
  'fr-FR': {
    lang: 'fr-FR',
    name: 'Français'
  },
  'it-IT': {
    lang: 'it-IT',
    name: 'Italiano'
  },
  'ja-JP': {
    lang: 'ja-JP',
    name: '日本語'
  },
  'ko-KR': {
    lang: 'ko-KR',
    name: '한국어'
  },
  'pt-BR': {
    lang: 'pt-BR',
    name: 'Português (BR)'
  },
  'pt-PT': {
    lang: 'pt-PT',
    name: 'Português (PT)'
  },
  'ru-RU': {
    lang: 'ru-RU',
    name: 'Русский'
  },
  'zh-CN': {
    lang: 'zh-CN',
    name: '中文（简体）'
  }
}

type I18nAttrs = {
  path: string
  locales: Locale[]
  defaultLocale: Locale
  pages: string[]
  localeRedirections?: Record<string, Locale>
  forceRedirection?: boolean
}

const isValidLocale = (locale: Locale, locales: Locale[]) =>
  !!(locales.includes(locale) || availableLocales[locale])
const isValidPage = (page: string, pages: string[]) => !!pages.includes(page)

// Getting the segments [0] = locale [1] = page
const getPathSegments = (path: string) => {
  const segments = path.split('/').filter((v: string) => v)

  return {
    segments,
    segmentsCount: segments.length
  }
}
export const getCurrentPage = (path: string, pages: string[]) => {
  const { segments } = getPathSegments(path)

  const page = isValidPage(segments[0], pages)
    ? segments[0]
    : isValidPage(segments[1], pages)
    ? segments[1]
    : segments[0] ?? ''

  return page
}

export const getCurrentLocale = (path: string, locales: Locale[]) => {
  const { segments } = getPathSegments(path)
  const locale = isValidLocale(segments[0] as Locale, locales) ? segments[0] : ''

  return locale
}

export const i18n = ({
  path,
  locales = [],
  defaultLocale,
  pages = [],
  localeRedirections = {},
  forceRedirection = false
}: I18nAttrs) => {
  // Root
  if (!path) {
    return {
      locale: defaultLocale,
      page: 'index',
      mustRedirect: forceRedirection
    }
  }

  const { segmentsCount } = getPathSegments(path)

  // If is valid locale we add it
  const locale = getCurrentLocale(path, locales)

  // Getting the page
  const page = getCurrentPage(path, pages)

  // Validations for valid locales and valid pages
  const equals = locale === page
  const invalidLocale = (equals && !locale) || !locale
  const invalidPage = !equals && !isValidPage(page, pages)
  const validLocale = !invalidLocale
  const validPage = !equals && isValidPage(page, pages)

  // Locale Redirections
  if (localeRedirections[locale]) {
    return {
      locale: localeRedirections[locale],
      page: validPage ? page : '',
      mustRedirect: forceRedirection
    }
  }

  // This is for single pages with no locale (/login)
  if (segmentsCount === 1 && invalidLocale && validPage) {
    return {
      locale: defaultLocale,
      page,
      mustRedirect: forceRedirection
    }
  }

  // All other paths
  return {
    locale: validLocale ? locale : defaultLocale,
    page: validPage ? page : '',
    mustRedirect: forceRedirection && (invalidLocale || invalidPage)
  }
}
