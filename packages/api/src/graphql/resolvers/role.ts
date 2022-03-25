import { ICreateRole, Model } from '../../types'

// Queries
const getRoles = (_: any, _args: any, { models }: { models: Model }) =>
  models.Role.findAll({
    include: [
      {
        model: models.User,
        as: 'users'
      }
    ]
  })

// Mutations
const createRole = (_: any, { input }: { input: ICreateRole }, { models }: { models: Model }) =>
  models.Role.create({ ...input })

export default {
  Query: {
    getRoles
  },
  Mutation: {
    createRole
  }
}
