import { SiteConfiguration } from '../../types/config'

export const config: SiteConfiguration = {
  siteTitle: 'Cabañas San Pancho',
  domainName: 'ranchosanpancho.com',
  theme: {
    brandColors: ['#465f95', '#537f6b', '#ffcd44', '#7f7171']
  },
  i18n: {
    locales: ['ar', 'en-us', 'es-mx', 'fr-fr', 'ja-jp'],
    defaultLocale: 'es-mx'
  },
  pages: ['index', 'login'],
  redirections: {
    localeRedirections: {
      en: 'en-us',
      es: 'es-mx',
      fr: 'fr-fr',
      jp: 'ja-jp'
    }
  }
}
