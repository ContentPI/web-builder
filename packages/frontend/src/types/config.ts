import { Locale } from '@web-builder/i18n'
import { ValueOf } from '@web-builder/utils'

export const Site = {
  CodeJobs: 'codejobs',
  ContentPI: 'contentpi',
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
  hostname?: string
  mode?: string
  theme?: {
    brandColors: string[]
  }
  api: {
    uri: string
  }
  i18n: {
    locales: Locale[]
    languages: string[]
    defaultLocale: Locale
  }
  pages: string[]
  redirections?: {
    localeRedirections: Record<string, Locale>
  }
}

export interface SiteBuilderConfiguration extends SiteConfiguration {
  site: Site
  homeUrl: string
}
