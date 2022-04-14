import { base64, is, security } from '@web-builder/utils'
import { AuthenticationError } from 'apollo-server-express'
import jwt from 'jsonwebtoken'

import { Token } from './types'

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

export const getUserBy = async (where: any, roles: string[], User: any): Promise<any> => {
  const user = await User.findOne({
    where,
    raw: true
  })

  if (roles.includes(user.role)) {
    return user
  }

  return null
}

export const authenticate = async (email: string, password: string, User: any): Promise<Token> => {
  const user = await getUserBy({ email }, ['Admin', 'Editor'], User)

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
