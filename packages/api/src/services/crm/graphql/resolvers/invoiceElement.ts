export default {
  Query: {
    getInvoiceElements: (_: any, _args: any, { models }: { models: any }): any[] =>
      models.InvoiceElement.findAll({}),
    getInvoiceElementById: async (
      _: any,
      { id }: { id: string },
      { models }: { models: any }
    ): Promise<any> => {
      const data = await models.InvoiceElement.findAll({
        where: {
          id
        }
      })

      return data
    },
    getInvoiceElementByInvoice: async (
      _: any,
      { invoiceId }: { invoiceId: string },
      { models }: { models: any }
    ): Promise<any> => {
      const data = await models.InvoiceElement.findAll({
        where: {
          invoiceId
        }
      })

      return data[0]
    }
  },
  Mutation: {
    createInvoiceElement: async (
      _: any,
      { input }: { input: any },
      { models }: { models: any }
    ): Promise<any> => {
      const createdInvoice = await models.InvoiceElement.create({ ...input })
      return createdInvoice
    },
    editInvoiceElement: async (
      _: any,
      { id, input }: { id: string; input: any },
      { models }: { models: any }
    ): Promise<any> => {
      const InvoiceToEdit = await models.InvoiceElement.findByPk(id)

      if (InvoiceToEdit) {
        const updatedInformation = await InvoiceToEdit.update({ ...input }, { where: { id } })

        return updatedInformation
      }

      return null
    }
  }
}
