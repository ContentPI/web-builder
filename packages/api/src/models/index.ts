import { keys, ts } from '@web-builder/utils'
import { Sequelize } from 'sequelize'

import Config from '../config'
import { Model } from '../types'

// Db Connection
const { engine, port, host, database, username, password } = Config.database

const uri = `${engine}://${username}:${password}@${host}:${port}/${database}`
const sequelize = new Sequelize(uri)

// Models
const models: Model = {
  User: require('./User').default(sequelize, Sequelize),
  Role: require('./Role').default(sequelize, Sequelize),
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
