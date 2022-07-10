import dotenv from 'dotenv'

import { config as cmsConfig } from './services/cms/config'
import { config as contentpiConfig } from './services/contentpi/config'
import { config as crmConfig } from './services/crm/config'
import { config as blankServiceConfig } from './services/default/config'
import { Service, ServiceBuilderConfiguration, ServiceConfiguration } from './types/config'

// Loading Env vars
dotenv.config()

const getServiceConfig = (service: Service): ServiceConfiguration => {
  switch (service) {
    case Service.CMS:
      return cmsConfig
    case Service.CRM:
      return crmConfig
    case Service.ContentPI:
      return contentpiConfig
    default:
      return blankServiceConfig
  }
}

const buildConfig = (): ServiceBuilderConfiguration => {
  const service = process.env.SERVICE as Service

  if (!service) {
    throw 'You must specify a service (E.g. SERVICE=crm npm run dev)'
  }

  const serviceConfig = getServiceConfig(service)

  const config: ServiceBuilderConfiguration = {
    ...serviceConfig,
    database: {
      ...serviceConfig.database,
      engine: process.env.DB_ENGINE,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    service
  }

  return config
}

const Config = buildConfig()

export default Config
