import { keys, ts } from '@web-builder/utils'
import pg from 'pg'
import { Sequelize } from 'sequelize'

import Config from '../../../config'

// Db Connection
const { engine, port, host, database, username, password } = Config.database ?? {}

const uri = `${engine}://${username}:${password}@${host}:${port}/${database}`
const sequelize = new Sequelize(uri, {
  dialectModule: pg,
  logging: process.env.LOGGING !== 'false'
})

// Models
const addModel = (path: string) => require(path).default(sequelize, Sequelize)

const models: any = {
  User: addModel('../../../models/User'),
  Expense: addModel('./Expense'),
  FreeNight: addModel('./FreeNight'),
  Guest: addModel('./Guest'),
  Information: addModel('./Information'),
  Invoice: addModel('./Invoice'),
  InvoiceElement: addModel('./InvoiceElement'),
  Reservation: addModel('./Reservation'),
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
