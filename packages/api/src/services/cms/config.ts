import { ServiceConfiguration } from '../../types/config'

export const config: ServiceConfiguration = {
  domainName: 'codejobs.com',
  port: 5000,
  database: {
    engine: 'postgresql',
    port: 5432,
    host: 'localhost',
    database: 'cms',
    username: 'czantany',
    password: '12345678'
  }
}
