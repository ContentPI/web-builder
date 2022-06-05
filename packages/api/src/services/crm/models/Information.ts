import { DataType } from '../../../types'

export default (sequelize: any, DataTypes: DataType) => {
  const Information = sequelize.define('Information', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4()
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.JSON,
      allowNull: false
    },
    cabin: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  return Information
}
