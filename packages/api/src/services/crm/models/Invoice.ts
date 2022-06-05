import { DataType } from '../../../types'

export default (sequelize: any, DataTypes: DataType) => {
  const Invoice = sequelize.define('Invoice', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4()
    },
    invoiceName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    issuerName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    invoiceNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    invoiceAdress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    issuerAdress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    issuerEmail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apliedIVA: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    invoiceEmail: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Invoice.associate = (models: any): void => {
    Invoice.hasMany(models.InvoiceElement, {
      foreignKey: {
        name: 'invoiceId',
        field: 'invoice_id'
      },
      as: 'invoiceElements'
    })
  }

  return Invoice
}
