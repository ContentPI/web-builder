// Types
export type User = {
  id: string
  username: string
  password: string
  email: string
  active: boolean
  roleId: string
  role?: string
}

export type Role = {
  role: string
  description?: string
}

export type Token = {
  token: string
}

export type Login = {
  email: string
  password: string
}

// Inputs
export type ICreateRole = Role
export type ILogin = Login
export type ICreateUser = User

export type Model = {
  User: any
  sequelize: any
}
