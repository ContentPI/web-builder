import { DataType } from '../../../types'

export default (sequelize: any, DataTypes: DataType) => {
  const Value = sequelize.define('Value', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4()
    },
    entry: {
      type: DataTypes.UUID,
      allowNull: false
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fieldIdentifier: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  return Value
}
