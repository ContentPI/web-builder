import { SiteConfiguration } from '../../types/config'

export const config: SiteConfiguration = {
  siteTitle: 'Cabañas San Pancho',
  domainName: 'ranchosanpancho.com',
  i18n: {
    locales: ['ar', 'en-US', 'es-MX', 'fr-FR', 'ja-JP'],
    defaultLocale: 'en-US'
  },
  pages: ['index', 'login'],
  redirections: {
    localeRedirections: {
      en: 'en-US',
      es: 'es-MX',
      fr: 'fr-FR',
      jp: 'ja-JP'
    }
  }
}
