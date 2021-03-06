export default {
  Mutation: {
    createField: async (
      _: any,
      { input }: { input: any },
      { models }: { models: any }
    ): Promise<any> => {
      const { defaultValue: targetModel, modelId: parentModel, type } = input

      if (type === 'Reference') {
        const hasReference = await models.Reference.findAll({
          where: {
            parentModel,
            targetModel
          }
        })

        if (!hasReference[0]) {
          await models.Reference.create({
            parentModel,
            targetModel
          })
        }
      }

      const newField = await models.Field.create({ ...input })

      return newField
    },
    deleteField: async (
      _: any,
      { id }: { id: string },
      { models }: { models: any }
    ): Promise<any> => {
      const fieldToRemove = await models.Field.findByPk(id)

      if (fieldToRemove) {
        await fieldToRemove.destroy({ where: { id } })
        return fieldToRemove
      }

      return null
    },
    editField: async (
      _: any,
      { id, input }: { id: string; input: any },
      { models }: { models: any }
    ): Promise<any> => {
      const fieldToEdit = await models.Field.findByPk(id)

      if (fieldToEdit) {
        const updatedField = await fieldToEdit.update({ ...input }, { where: { id } })

        return updatedField
      }

      return null
    }
  }
}
