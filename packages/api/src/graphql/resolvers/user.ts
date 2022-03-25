import { authenticate, getUserBy, getUserData } from '../../authentication'
import { Login, Model, User } from '../../types'

// Queries
const getUsers = (_: any, _args: any, { models }: { models: Model }) =>
  models.User.findAll({
    include: [
      {
        model: models.Role,
        as: 'roles'
      }
    ]
  })

const getUser = async (_: any, { at }: { at: string }, { models }: { models: Model }) => {
  const connectedUser = await getUserData(at)

  if (connectedUser) {
    // Validating if the user is still valid
    const user = await getUserBy(
      {
        id: connectedUser.id,
        email: connectedUser.email,
        privilege: connectedUser.privilege,
        active: connectedUser.active
      },
      models
    )

    if (user) {
      return {
        ...connectedUser
      }
    }
  }

  return {
    id: '',
    username: '',
    password: '',
    email: '',
    privilege: '',
    active: false
  }
}

// Mutations
const createUser = (_: any, { input }: { input: User }, { models }: { models: Model }) =>
  models.User.create({ ...input })

const login = (_: any, { input }: { input: Login }, { models }: { models: Model }) =>
  authenticate(input.email, input.password, models)

export default {
  Query: {
    getUser,
    getUsers
  },
  Mutation: {
    createUser,
    login
  }
}
