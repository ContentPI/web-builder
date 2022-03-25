import { DataType, Model, Role, Sequelize } from '../types'

export default (sequelize: Sequelize, dataType: DataType): Role => {
  const role = sequelize.define('Role', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: dataType.UUID,
      defaultValue: dataType.UUIDV4()
    },
    role: {
      type: dataType.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: dataType.STRING,
      allowNull: true
    }
  })

  role.associate = (models: Model) => {
    role.hasMany(models.User, {
      foreignKey: {
        name: 'roleId',
        field: 'role_id'
      },
      as: 'users'
    })
  }

  return role
}
