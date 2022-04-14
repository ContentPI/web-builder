import 'reflect-metadata'

import { DataSource } from 'typeorm'

import Config from './config'
import { User } from './entity/User'

// Db Connection
const { port, host, database, username, password } = Config.database ?? {}

const db = new DataSource({
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: []
})

export default db
