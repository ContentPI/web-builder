import { Arg, Ctx, Field, InputType, Mutation, ObjectType, Query, Resolver } from 'type-graphql'

import { authenticate, getUserBy, getUserData } from '../../authentication'
import { User } from '../../entity/User'
import { Context } from '../../types'

// Validations
const validateNewUser = (input: CreateUserInput) => {
  if (!input.email.includes('@')) {
    return [
      {
        field: 'email',
        message: 'Invalid Email'
      }
    ]
  }

  if (input.username.length <= 2) {
    return [
      {
        field: 'username',
        message: 'Username length must be greater than 2'
      }
    ]
  }

  if (input.username.includes('@')) {
    return [
      {
        field: 'username',
        message: 'Username cannot include an @'
      }
    ]
  }

  if (input.password.length <= 2) {
    return [
      {
        field: 'password',
        message: 'length must be greater than 2'
      }
    ]
  }

  return null
}

// Inputs
@InputType()
export class CreateUserInput {
  @Field()
  username!: string

  @Field()
  email!: string

  @Field()
  password!: string

  @Field()
  role!: string

  @Field()
  active!: boolean
}

@InputType()
export class LoginInput {
  @Field()
  email!: string

  @Field()
  password!: string
}

// Responses
@ObjectType()
class FieldError {
  @Field()
  field!: string

  @Field()
  message!: string
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[]

  @Field(() => User, { nullable: true })
  user?: User
}

@ObjectType()
class AccessToken {
  @Field()
  at!: string
}

// Resolvers
@Resolver(User)
export class UserResolver {
  // Queries
  @Query(() => [User])
  getUsers() {
    return User.find()
  }

  @Query(() => User)
  async getUser(@Arg('at') at: string) {
    const connectedUser = await getUserData(at)

    if (connectedUser) {
      // Validating if the user is still valid
      const user = await getUserBy(
        {
          id: connectedUser.id,
          email: connectedUser.email,
          active: connectedUser.active
        },
        [connectedUser.role],
        User
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
      role: '',
      active: false
    }

    return User.find()
  }

  // Mutations
  @Mutation(() => UserResponse)
  async createUser(
    @Arg('input') input: CreateUserInput,
    @Ctx() { db }: Context
  ): Promise<UserResponse> {
    const errors = validateNewUser(input)

    if (errors) {
      return { errors }
    }

    return db.getRepository(User).create(input)
  }

  @Mutation(() => AccessToken)
  async login(@Arg('input') input: LoginInput, @Ctx() { db }: Context): Promise<any> {
    return authenticate(input.email, input.password, db.getRepository(User))
  }
}
