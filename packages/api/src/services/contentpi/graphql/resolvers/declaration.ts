export default {
  Query: {
    getDeclarations: (_: any, _args: any, { models }: { models: any }) =>
      models.Declaration.findAll()
  },
  Mutation: {
    createDeclaration: (_: any, { input }: { input: any }, { models }: { models: any }) =>
      models.Declaration.create({ ...input })
  }
}
