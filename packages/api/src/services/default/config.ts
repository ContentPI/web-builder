import { ServiceConfiguration } from '../../types/config'

export const config: ServiceConfiguration = {
  domainName: 'localhost',
  port: 5000,
  database: {
    engine: 'postgresql',
    port: 5432,
    host: 'localhost',
    database: '',
    username: '',
    password: ''
  }
}
