export default {
  Query: {
    getFreeNights: (_: any, _args: any, { models }: { models: any }): any[] =>
      models.FreeNights.findAll({}),
    getFreeNightsById: async (
      _: any,
      { id }: { id: string },
      { models }: { models: any }
    ): Promise<any> => {
      const data = await models.FreeNights.findAll({
        where: {
          id
        }
      })

      return data[0]
    }
  },
  Mutation: {
    createFreeNight: async (
      _: any,
      { input }: { input: any },
      { models }: { models: any }
    ): Promise<any> => {
      const createdFreeNight = await models.FreeNights.create({ ...input })
      return createdFreeNight
    },
    editFreeNight: async (
      _: any,
      { id, input }: { id: string; input: any },
      { models }: { models: any }
    ): Promise<any> => {
      const FreeNightToEdit = await models.FreeNights.findByPk(id)

      if (FreeNightToEdit) {
        const updatedFreeNight = await FreeNightToEdit.update({ ...input }, { where: { id } })

        return updatedFreeNight
      }

      return null
    }
  }
}
