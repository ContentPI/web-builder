import { Model, Role } from '../../types'

// Queries
const getRoles = (_: any, _args: any, { models }: { models: Model }) => models.Role.findAll()

// Mutations
const createRole = (_: any, { input }: { input: Role }, { models }: { models: Model }) =>
  models.Role.create({ ...input })

export default {
  Query: {
    getRoles
  },
  Mutation: {
    createRole
  }
}
