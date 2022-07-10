import fileFields from '../../seeds/fileFields'
import systemFields from '../../seeds/systemFields'

export default {
  Query: {
    getApps: (_: any, _args: any, { models }: { models: any }) =>
      models.App.findAll({
        include: [
          {
            model: models.Model,
            as: 'models'
          },
          {
            model: models.Enumeration,
            as: 'enumerations'
          }
        ]
      }),
    getAppById: async (
      _: any,
      const data = await models.App.findAll({
        where: {
          id
        },
        include: [
          {
            model: models.Model,
            as: 'models'
          },
          {
            model: models.Enumeration,
            as: 'enumerations'
          }
        ]
      })

      return data[0]
    }
  },
  Mutation: {
    createApp: async (
      _: any,
      { input }: { input: any },
      { models }: { models: any }
    ): Promise<any> => {
      const createdApp = await models.App.create({ ...input })

      // Creating Asset Model
      const newModel = await models.Model.create({
        appId: createdApp.id,
        description: 'Asset System',
        identifier: 'asset',
        modelName: 'Asset'
      })

      // Creating system fields
      const fields = [...systemFields(newModel), ...fileFields(newModel)]

      await models.Field.bulkCreate(fields)

      return createdApp
    }
  }
}
