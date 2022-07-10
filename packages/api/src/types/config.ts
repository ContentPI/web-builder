import { ValueOf } from '@web-builder/utils'

export const Service = {
  CMS: 'cms',
  CRM: 'crm',
  ContentPI: 'contentpi'
} as const

export type Service = ValueOf<typeof Service>

export type Mode = 'production' | 'development'

export enum DeploymentType {
  PRODUCTION = 'production',
  STAGING = 'staging',
  DEVELOPMENT = 'development'
}

export interface ServiceConfiguration {
  domainName: string
  port: number
  database?: {
    engine?: string
    port?: number
    host?: string
    database?: string
    username?: string
    password?: string
  }
}

export interface ServiceBuilderConfiguration extends ServiceConfiguration {
  service: Service
}
