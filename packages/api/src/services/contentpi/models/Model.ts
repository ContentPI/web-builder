import { DataType } from '../../../types'

export default (sequelize: any, DataTypes: DataType) => {
  const Model = sequelize.define('Model', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4()
    },
    modelName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    identifier: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })

  Model.associate = (models: any): void => {
    Model.hasMany(models.Field, {
      foreignKey: {
        name: 'modelId',
        field: 'modelId'
      },
      as: 'fields',
      onDelete: 'CASCADE'
    })
  }

  return Model
}
