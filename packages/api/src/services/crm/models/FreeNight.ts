import { DataType } from '../../../types'

export default (sequelize: any, DataTypes: DataType) => {
  const FreeNight = sequelize.define('FreeNight', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4()
    },
    isUsed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    dateOfUse: {
      type: DataTypes.DATE
    },
    cabin: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  return FreeNight
}
