import { resolve } from 'path'

import { db, getRelationships, requireModel } from '../../../db'
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

// Models
const dir = (path: string) => resolve(__dirname, path)

const models: Models = {
  User: requireModel(dir('../../../models/User')),
  App: requireModel(dir('./App')),
  Declaration: requireModel(dir('./Declaration')),
  Enumeration: requireModel(dir('./Enumeration')),
  Field: requireModel(dir('./Field')),
  I18n: requireModel(dir('./I18n')),
  Model: requireModel(dir('./Model')),
  Reference: requireModel(dir('./Reference')),
  Value: requireModel(dir('./Value')),
  sequelize: db
}

// Relationships
const relationships = getRelationships(models)

export default relationships
