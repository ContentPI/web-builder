export default {
  Query: {
    getI18n: (_: any, _args: any, { models }: { models: any }) => models.I18n.findAll()
  }
}
