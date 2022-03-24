export type Locale =
  | 'ar'
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
    lang: 'es',
    name: 'Español'
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
}

const isValidLocale = (locale: Locale, locales: Locale[]) => !!locales.includes(locale)
const isValidPage = (page: string, pages: string[]) => !!pages.includes(page)

export const i18n = ({ path, locales = [], defaultLocale = 'en-US', pages = [] }: I18nAttrs) => {
  // Root
  if (!path) {
    return {
      locale: defaultLocale,
      page: 'index',
      isInvalidLocale: false
    }
  }

  // Getting the segments [0] = locale [1] = page
  const segments = path.split('/').filter((v: string) => v)

  // If is valid locale we add it
  const locale = isValidLocale(segments[0] as Locale, locales) ? segments[0] : false

  // Getting the page
  const page = isValidPage(segments[0], pages)
    ? segments[0]
    : isValidPage(segments[1], pages)
    ? segments[1]
    : segments[0] ?? false

  // Validations for valid locales and valid pages
  const equals = locale === page
  const invalidLocale = (equals && !locale) || !locale
  const invalidPage = !equals && !isValidPage(page, pages)
  const validLocale = !invalidLocale
  const validPage = !equals && isValidPage(page, pages)

  // This is for single pages with no locale (/login)
  if (segments.length === 1 && invalidLocale && validPage) {
    return {
      locale: defaultLocale,
      page,
      mustRedirect: true
    }
  }

  // All other paths
  return {
    locale: validLocale ? locale : defaultLocale,
    page: validPage ? page : '',
    mustRedirect: invalidLocale || invalidPage
  }
}
