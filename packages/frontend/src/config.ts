import { is } from '@web-builder/utils'

import { config as blankPageConfig } from './sites/blank-page/config'
import { config as codejobsConfig } from './sites/codejobs/config'
import { config as sanPanchoConfig } from './sites/san-pancho/config'
import { Site, SiteBuilderConfiguration, SiteConfiguration } from './types/config'

const getSiteConfig = (site: Site): SiteConfiguration => {
  switch (site) {
    case Site.CodeJobs:
      return codejobsConfig
    case Site.SanPancho:
      return sanPanchoConfig
    default:
      return blankPageConfig
  }
}

const buildConfig = (): SiteBuilderConfiguration => {
  // Server site
  let site = process.env.SITE as Site

  // Client site
  if (is.Browser()) {
    const { pageProps } = window.__NEXT_DATA__.props

    if (pageProps && pageProps.site) {
      site = pageProps.site
    }
  } else if (!site) {
    throw 'You must specify a site (E.g. SITE=codejobs npm run dev)'
  }

  const siteConfig = getSiteConfig(site)

  const config: SiteBuilderConfiguration = {
    ...siteConfig,
    site,
    homeUrl: `https://${siteConfig.domainName}`
  }

  return config
}

const Config = buildConfig()

export default Config
