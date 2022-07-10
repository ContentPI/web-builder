import { keys, ts } from '@web-builder/utils'
import pg from 'pg'
import { Sequelize } from 'sequelize'

import Config from '../../../config'
import { Model } from '../../../types'

interface Models extends Model {
  Post: any
}

// Db Connection
const { engine, port, host, database, username, password } = Config.database ?? {}

const uri = `${engine}://${username}:${password}@${host}:${port}/${database}`
const sequelize = new Sequelize(uri, {
  dialectModule: pg
})

// Models
const addModel = (path: string) => require(path).default(sequelize, Sequelize)

const models: Models = {
  User: require('../../../models/User').default(sequelize, Sequelize),
  Post: addModel('./Post'),
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
