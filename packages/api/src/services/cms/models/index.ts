import { resolve } from 'path'

import { db, getRelationships, requireModel } from '../../../db'
import { Model } from '../../../types'

interface Models extends Model {
  Post: any
}

// Models
const dir = (path: string) => resolve(__dirname, path)

const models: Models = {
  User: requireModel(dir('../../../models/User')),
  Post: requireModel(dir('./Post')),
  sequelize: db
}

// Relationships
const relationships = getRelationships(models)

export default relationships
