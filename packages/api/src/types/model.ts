export type User = {
  id: string
  username: string
  password: string
  email: string
  active: boolean
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

export type Model = {
  User: any
  Role: any
  sequelize: any
}
