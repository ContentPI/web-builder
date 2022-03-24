import { SiteConfiguration } from '../../types/config'

export const config: SiteConfiguration = {
  siteTitle: 'Cabañas San Pancho',
  domainName: 'ranchosanpancho.com',
  i18n: {
    locales: ['en-US', 'es-MX', 'ja-JP'],
    defaultLocale: 'en-US'
  },
  pages: ['index', 'login']
}
