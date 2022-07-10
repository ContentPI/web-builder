export default {
  Query: {
    getEnumerationsByAppId: (_: any, { appId }: { appId: string }, { models }: { models: any }) =>
      models.Enumeration.findAll({
        where: {
          appId
        }
      })
  },
  Mutation: {
    createEnumeration: (_: any, { input }: { input: any }, { models }: { models: any }) =>
      models.Enumeration.create({ ...input }),
    deleteEnumeration: async (
      _: any,
      { id }: { id: string },
      { models }: { models: any }
    ): Promise<any> => {
      const enumerationToRemove = await models.Enumeration.findByPk(id)

      if (enumerationToRemove) {
        await enumerationToRemove.destroy({ where: { id } })
        return enumerationToRemove
      }

      return null
    },
    editEnumeration: async (
      _: any,
      { id, input }: { id: string; input: any },
      { models }: { models: any }
    ): Promise<any> => {
      const enumerationToEdit = await models.Enumeration.findByPk(id)

      if (enumerationToEdit) {
        const updatedEnumeration = await enumerationToEdit.update({ ...input }, { where: { id } })

        return updatedEnumeration
      }

      return null
    }
  }
}
