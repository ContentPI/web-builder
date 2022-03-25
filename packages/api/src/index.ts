import { makeExecutableSchema } from '@graphql-tools/schema'
import { ApolloServer } from 'apollo-server'

import Config from './config'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/types'
import models from './models'

// Schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

// Apollo Server
const apolloServer = new ApolloServer({
  schema,
  context: {
    models
  }
})

const alter = true
const force = false

models.sequelize.sync({ alter, force }).then(() => {
  apolloServer.listen(Config.port).then(({ url }) => {
    console.log(`Running on ${url}`)
  })
})
