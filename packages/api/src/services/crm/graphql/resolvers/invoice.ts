export default {
  Query: {
    getInvoices: (_: any, _args: any, { models }: { models: any }): any[] =>
      models.Invoice.findAll({
        include: [
          {
            model: models.InvoiceElement,
            as: 'invoiceElements'
          }
        ]
      }),
    getInvoiceById: async (
      _: any,
      { id }: { id: string },
      { models }: { models: any }
    ): Promise<any> => {
      const data = await models.Invoice.findAll({
        where: {
          id
        },
        include: [
          {
            model: models.InvoiceElement,
            as: 'invoiceElements'
          }
        ]
      })

      return data
    },
    getInvoiceByGuest: async (
      _: any,
      { guestId }: { guestId: string },
      { models }: { models: any }
    ): Promise<any> => {
      const data = await models.Invoice.findAll({
        where: {
          guestId
        },
        include: [
          {
            model: models.InvoiceElement,
            as: 'invoiceElements'
          }
        ]
      })

      return data
    }
  },
  Mutation: {
    createInvoice: async (
      _: any,
      { input }: { input: any },
      { models }: { models: any }
    ): Promise<any> => {
      const createdInvoice = await models.Invoice.create({ ...input })

      return createdInvoice
    },
    editInvoice: async (
      _: any,
      { id, input }: { id: string; input: any },
      { models }: { models: any }
    ): Promise<any> => {
      const invoiceToEdit = await models.Invoice.findByPk(id)

      if (invoiceToEdit) {
        const updatedInformation = await invoiceToEdit.update({ ...input }, { where: { id } })

        return updatedInformation
      }

      return null
    }
  }
}
