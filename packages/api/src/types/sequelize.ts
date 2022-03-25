export type Sequelize = {
  _defaults?: any
  name?: string
  options?: any
  associate?: any
  define?: any
}

export type DataType = {
  UUID: string
  UUIDV4(): string
  STRING: string
  BOOLEAN: boolean
  TEXT: string
  INTEGER: number
  DATE: string
  FLOAT: number
}
