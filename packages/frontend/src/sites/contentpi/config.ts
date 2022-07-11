import { SiteConfiguration } from '../../types/config'

export const config: SiteConfiguration = {
  siteTitle: 'ContentPI',
  domainName: 'contentpi.com',
  theme: {
    brandColors: ['#0499dc', '#00bde5', '#212121', '#000000']
  },
  api: {
    uri: 'https://contentpi.com/graphql'
  },
  i18n: {
    locales: ['ar', 'en-us', 'es-mx', 'fr-fr', 'it-it', 'ja-jp'],
    languages: ['Arabic', 'English', 'Spanish', 'French', 'Italian', 'Japanese'],
    defaultLocale: 'es-mx'
  },
  pages: ['index', 'login'],
  redirections: {
    localeRedirections: {
      en: 'en-us',
      es: 'es-mx',
      fr: 'fr-fr',
      it: 'it-it',
      jp: 'ja-jp'
    }
  }
}
