import { SiteConfiguration } from '../../types/config'

export const config: SiteConfiguration = {
  siteTitle: 'Blank Page',
  domainName: 'localhost',
  api: {
    uri: 'http://localhost:4000/graphql'
  },
  i18n: {
    locales: ['en-us'],
    languages: ['English'],
    defaultLocale: 'en-us'
  },
  pages: ['index']
}
