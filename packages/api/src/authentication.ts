import { base64, is, security } from '@web-builder/utils'
import { AuthenticationError } from 'apollo-server-express'
import jwt from 'jsonwebtoken'

import { Model, Token, User } from './types'

// TODO: Movie this to secrets.env
const secretKey = 'xxx'
const expiresIn = '7d'

export const createToken = async (user: User): Promise<string[]> => {
  const { id, username, password, email, active, role } = user
  const token = base64.set(`${security.encrypt(secretKey)}${password}`)
  const userData = {
    id,
    username,
    email,
    active,
    token,
    role
  }

  const createTk = jwt.sign({ data: base64.set(userData) }, secretKey, {
    expiresIn
  })

  return Promise.all([createTk])
}

export const getUserBy = async (where: any, roles: string[], models: Model): Promise<any> => {
  const user = await models.User.findOne({
    where,
    raw: true
  })

  if (user && roles.includes(user.role)) {
    return user
  }

  return null
}

export const authenticate = async (
  emailOrUsername: string,
  password: string,
  models: Model
): Promise<Token> => {
  const where = is.Email(emailOrUsername)
    ? { email: emailOrUsername }
    : { username: emailOrUsername }

  const user = await getUserBy(where, ['god', 'admin', 'editor'], models)

  if (!user) {
    throw new AuthenticationError('Invalid Login')
  }

  const passwordMatch = is.PasswordMatch(security.encrypt(password), user.password)
  const isActive = user.active

  if (!passwordMatch) {
    throw new AuthenticationError('Invalid Login')
  }

  if (!isActive) {
    throw new AuthenticationError('Your account is not activated yet')
  }

  const [token] = await createToken(user)

  return {
    token
  }
}

export function jwtVerify(accessToken: any, cb: any): void {
  jwt.verify(accessToken, secretKey, (error: any, accessTokenData: any = {}) => {
    const { data: user } = accessTokenData

    if (error || !user) {
      return cb(false)
    }

    const userData = base64.get(user)

    return cb(userData)
  })
}

export async function getUserData(accessToken: any): Promise<any> {
  const UserPromise = new Promise((resolve) => jwtVerify(accessToken, (user: any) => resolve(user)))

  const user = await UserPromise

  return user
}
