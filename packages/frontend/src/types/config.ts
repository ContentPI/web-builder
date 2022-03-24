import { Locale } from '@web-builder/i18n'

import { ValueOf } from './utils'

export const Site = {
  CodeJobs: 'codejobs',
  SanPancho: 'san-pancho',
  BlankPage: 'blank-page'
} as const

export type Site = ValueOf<typeof Site>

export type Mode = 'production' | 'development'

export enum DeploymentType {
  PRODUCTION = 'production',
  STAGING = 'staging',
  DEVELOPMENT = 'development'
}

export interface SiteConfiguration {
  siteTitle: string
  domainName: string
  i18n: {
    locales: Locale[]
    defaultLocale: Locale
  }
  pages: string[]
}

export interface SiteBuilderConfiguration extends SiteConfiguration {
  site: Site
  homeUrl: string
}
