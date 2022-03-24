import { SiteConfiguration } from '../../types/config'

export const config: SiteConfiguration = {
  siteTitle: 'Codejobs',
  domainName: 'codejobs.com',
  i18n: {
    locales: ['en-US', 'es-MX', 'fr-FR'],
    defaultLocale: 'en-US'
  },
  pages: ['index', 'login']
}
