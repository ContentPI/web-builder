export default {
  Query: {
    getFreeNights: (_: any, _args: any, { models }: { models: any }): any[] =>
      models.FreeNight.findAll({}),
    getFreeNightsById: async (
      _: any,
      { id }: { id: string },
      { models }: { models: any }
    ): Promise<any> => {
      const data = await models.FreeNight.findAll({
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
      const createdFreeNight = await models.FreeNight.create({ ...input })
      return createdFreeNight
    },
    editFreeNight: async (
      _: any,
      { id, input }: { id: string; input: any },
      { models }: { models: any }
    ): Promise<any> => {
      const freeNightToEdit = await models.FreeNight.findByPk(id)

      if (freeNightToEdit) {
        const updatedFreeNight = await freeNightToEdit.update({ ...input }, { where: { id } })

        return updatedFreeNight
      }

      return null
    }
  }
}
