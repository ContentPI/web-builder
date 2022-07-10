import { DataType } from '../../../types'

export default (sequelize: any, DataTypes: DataType) => {
  const App = sequelize.define('App', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4()
    },
    appName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    identifier: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })

  App.associate = (models: any): void => {
    App.hasMany(models.Model, {
      foreignKey: {
        name: 'appId',
        field: 'appId'
      },
      as: 'models',
      onDelete: 'CASCADE'
    })

    App.hasMany(models.Enumeration, {
      foreignKey: {
        name: 'appId',
        field: 'appId'
      },
      as: 'enumerations',
      onDelete: 'CASCADE'
    })
  }

  return App
}
