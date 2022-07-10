import { resolve } from 'path'

import { db, getRelationships, requireModel } from '../../../db'
import { Model } from '../../../types'

interface Models extends Model {
  Expense: any
  FreeNight: any
  Guest: any
  Information: any
  Invoice: any
  InvoiceElement: any
  Reservation: any
}

// Models
const dir = (path: string) => resolve(__dirname, path)
const models: Models = {
  User: requireModel(dir('../../../models/User')),
  Expense: requireModel(dir('./Expense')),
  FreeNight: requireModel(dir('./FreeNight')),
  Guest: requireModel(dir('./Guest')),
  Information: requireModel(dir('./Information')),
  Invoice: requireModel(dir('./Invoice')),
  InvoiceElement: requireModel(dir('./InvoiceElement')),
  Reservation: requireModel(dir('./Reservation')),
  sequelize: db
}

// Relationships
const relationships = getRelationships(models)

export default relationships
