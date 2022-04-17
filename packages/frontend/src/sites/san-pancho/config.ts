import { SiteConfiguration } from '../../types/config'

export const config: SiteConfiguration = {
  siteTitle: 'Cabañas San Pancho',
  domainName: 'ranchosanpancho.com',
  theme: {
    brandColors: ['#465f95', '#537f6b', '#ffcd44', '#7f7171']
  },
  api: {
    uri: 'https://ranchosanpancho.com/graphql'
  },
  i18n: {
    locales: ['ar', 'en-us', 'es-mx', 'fr-fr', 'it-it', 'ja-jp'],
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
