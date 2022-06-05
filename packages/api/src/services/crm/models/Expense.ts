import { DataType } from '../../../types'

export default (sequelize: any, DataTypes: DataType) => {
  const Expense = sequelize.define('Expense', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4()
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    concept: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  })

  return Expense
}
