import { keys, ts } from '@web-builder/utils'
import pg from 'pg'
import { Sequelize } from 'sequelize'

import Config from './config'

// Db Connection
const { engine, port, host, database, username, password } = Config.database ?? {}

const uri = `${engine}://${username}:${password}@${host}:${port}/${database}`

export const db = new Sequelize(uri, {
  dialectModule: pg,
  logging: process.env.LOGGING !== 'false'
})

export const requireModel = (path: string) => require(path).default(db, Sequelize)

export const getRelationships = (models: any) => {
  keys(models).forEach((modelName: string) => {
    if (ts.hasKey(models, modelName)) {
      if (models[modelName].associate) {
        models[modelName].associate(models)
      }
    }
  })

  return models
}
