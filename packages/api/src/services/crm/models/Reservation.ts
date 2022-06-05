import { DataType } from '../../../types'

export default (sequelize: any, DataTypes: DataType) => {
  const Reservation = sequelize.define('Reservation', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4()
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    nights: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    freeNights: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    guests: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pendingAmount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reservationCost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deposit: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    needCrib: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    canceled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    reservationType: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })

  return Reservation
}
