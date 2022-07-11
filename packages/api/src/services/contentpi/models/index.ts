import { keys, ts } from '@web-builder/utils'
import pg from 'pg'
import { Sequelize } from 'sequelize'

import Config from '../../../config'
import { Model } from '../../../types'

interface Models extends Model {
  App: any
  Declaration: any
  Enumeration: any
  Field: any
  I18n: any
  Model: any
  Reference: any
  Value: any
}

// Db Connection
const { engine, port, host, database, username, password } = Config.database ?? {}

const uri = `${engine}://${username}:${password}@${host}:${port}/${database}`
const sequelize = new Sequelize(uri, {
  dialectModule: pg,
  logging: process.env.LOGGING !== 'false'
})

// Models
const addModel = (path: string) => require(path).default(sequelize, Sequelize)

const models: Models = {
  User: addModel('../../../models/User'),
  App: addModel('./App'),
  Declaration: addModel('./Declaration'),
  Enumeration: addModel('./Enumeration'),
  Field: addModel('./Field'),
  I18n: addModel('./I18n'),
  Model: addModel('./Model'),
  Reference: addModel('./Reference'),
  Value: addModel('./Value'),
  sequelize
}

// Relationships
keys(models).forEach((modelName: string) => {
  if (ts.hasKey(models, modelName)) {
    if (models[modelName].associate) {
      models[modelName].associate(models)
    }
  }
})

export default models
