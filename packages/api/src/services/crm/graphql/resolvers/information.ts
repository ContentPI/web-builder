export default {
  Query: {
    getInformation: (_: any, _args: any, { models }: { models: any }): Promise<any> =>
      models.Information.findOne({})
  },
  Mutation: {
    createInformation: async (
      _: any,
      { input }: { input: any },
      { models }: { models: any }
    ): Promise<any> => {
      const creatediInformation = await models.Information.create({ ...input })
      return creatediInformation
    },
    editInformation: async (
      _: any,
      { id, input }: { id: string; input: any },
      { models }: { models: any }
    ): Promise<any> => {
      const informationToEdit = await models.Information.findByPk(id)

      if (informationToEdit) {
        const updatedInformation = await informationToEdit.update({ ...input }, { where: { id } })

        return updatedInformation
      }

      return {}
    }
  }
}
