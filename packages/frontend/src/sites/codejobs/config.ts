import { SiteConfiguration } from '../../types/config'

export const config: SiteConfiguration = {
  siteTitle: 'Codejobs',
  domainName: 'codejobs.com',
  theme: {
    brandColors: ['#00325a', '#027ac1', '#222', '#bdbdbd']
  },
  api: {
    uri: 'https://codejobs.com/graphql'
  },
  i18n: {
    locales: ['ar', 'en-us', 'es-mx', 'fr-fr', 'it-it', 'ja-jp'],
    languages: ['Arabic', 'English', 'Spanish', 'French', 'Italian', 'Japanese'],
    defaultLocale: 'en-us'
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
