export default {
  Query: {
    getPosts: (_: any, _args: any, { models }: { models: any }) => models.Post.findAll({}),
    getPostBySlug: async (
      _: any,
      { slug }: { slug: string },
      { models }: { models: any }
    ): Promise<any> => {
      const data = await models.Post.findAll({
        where: {
          slug
        }
      })

      return data[0]
    }
  },
  Mutation: {
    createPost: async (
      _: any,
      { input }: { input: any },
      { models }: { models: any }
    ): Promise<any> => {
      const createdPost = await models.Post.create({ ...input })

      return createdPost
    },
    editPost: async (
      _: any,
      { id, input }: { id: string; input: any },
      { models }: { models: any }
    ): Promise<any> => {
      const postToEdit = await models.Post.findByPk(id)

      if (postToEdit) {
        const updatedPost = await postToEdit.update({ ...input }, { where: { id } })

        return updatedPost
      }

      return null
    }
  }
}
