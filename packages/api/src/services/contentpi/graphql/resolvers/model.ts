import systemFields from '../../seeds/systemFields'

export default {
  Query: {
    getModels: (_: any, _args: any, { models }: { models: any }) =>
      models.Model.findAll({
        include: [
          {
            model: models.Field,
            as: 'fields'
          }
        ]
      }),
    getModel: async (
      _: any,
      { identifier, appId }: { identifier: string; appId: string },
      { models }: { models: any }
    ): Promise<any> => {
      const data = await models.Model.findAll({
        where: {
          identifier,
          appId
        },
        include: [
          {
            model: models.Field,
            as: 'fields',
            include: [
              {
                model: models.Value,
                as: 'values'
              }
            ]
          }
        ]
      })

      // Sorting by creation date
      data[0].fields.sort((a: any, b: any) => (a.order > b.order ? 1 : -1))

      return data[0]
    }
  },
  Mutation: {
    createModel: async (
      _: any,
      { input }: { input: any },
      { models }: { models: any }
    ): Promise<any> => {
      const newModel = await models.Model.create({ ...input })

      // Creating system fields
      await models.Field.bulkCreate(systemFields(newModel))

      return newModel
    },
    deleteModel: async (
      _: any,
      { id }: { id: string },
      { models }: { models: any }
    ): Promise<any> => {
      const modelToRemove = await models.Model.findByPk(id)

      if (modelToRemove) {
        await modelToRemove.destroy({ where: { id } })
        return modelToRemove
      }

      return null
    },
    editModel: async (
      _: any,
      { id, input }: { id: string; input: any },
      { models }: { models: any }
    ): Promise<any> => {
      const modelToEdit = await models.Model.findByPk(id)

      if (modelToEdit) {
        const updatedModel = await modelToEdit.update({ ...input }, { where: { id } })

        return updatedModel
      }

      return null
    }
  }
}
