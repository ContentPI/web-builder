import { DataType } from '../../../types'

export default (sequelize: any, DataTypes: DataType) => {
  const Guest = sequelize.define('Guest', {
    googleContactId: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    socialMedia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    birthday: {
      type: DataTypes.STRING,
      allowNull: true
    },
    organization: {
      type: DataTypes.STRING,
      allowNull: true
    },
    note: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })

  Guest.associate = (models: any): void => {
    Guest.hasMany(models.Reservation, {
      foreignKey: {
        name: 'googleContactId',
        field: 'googleContactId'
      },
      as: 'reservations'
    })

    Guest.hasMany(models.FreeNight, {
      foreignKey: {
        name: 'userId',
        field: 'user_id'
      },
      as: 'freeNights'
    })

    Guest.hasMany(models.Invoice, {
      foreignKey: {
        name: 'googleContactId',
        field: 'googleContactId'
      },
      as: 'invoice'
    })
  }

  return Guest
}
