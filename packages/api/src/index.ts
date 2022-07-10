import { makeExecutableSchema } from '@graphql-tools/schema'
import { secretKey } from '@web-builder/authentication'
import { ApolloServer } from 'apollo-server-express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import expressJwt from 'express-jwt'
import { applyMiddleware } from 'graphql-middleware'

import resolversCMS from './services/cms/graphql/resolvers'
import typeDefsCMS from './services/cms/graphql/types'
import modelsCMS from './services/cms/models'
import setInitialSeedsCMS from './services/cms/seeds'
import resolversContentPI from './services/contentpi/graphql/resolvers'
import typeDefsContentPI from './services/contentpi/graphql/types'
import modelsContentPI from './services/contentpi/models'
import setInitialSeedsContentPI from './services/contentpi/seeds'
import resolversCRM from './services/crm/graphql/resolvers'
import typeDefsCRM from './services/crm/graphql/types'
import modelsCRM from './services/crm/models'
import setInitialSeedsCRM from './services/crm/seeds'

const service = process.env.SERVICE ?? 'default'

const seeds: any = {
  cms: setInitialSeedsCMS,
  crm: setInitialSeedsCRM,
  contentpi: setInitialSeedsContentPI
}

const models: any = {
  cms: modelsCMS,
  crm: modelsCRM,
  contentpi: modelsContentPI
}

const resolvers: any = {
  cms: resolversCMS,
  crm: resolversCRM,
  contentpi: resolversContentPI
}

const typeDefs: any = {
  cms: typeDefsCMS,
  crm: typeDefsCRM,
  contentpi: typeDefsContentPI
}

const app = express()

const corsOptions = {
  origin: '*',
  credentials: true
}

app.use(cors(corsOptions))

app.use(cookieParser())

app.use(
  expressJwt({
    secret: secretKey,
    algorithms: ['HS256'],
    credentialsRequired: false
  })
)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// Schema
const schema = applyMiddleware(
  makeExecutableSchema({
    typeDefs: typeDefs[service],
    resolvers: resolvers[service]
  })
)

// Apollo Server
const apolloServer = new ApolloServer({
  schema,
  context: async ({ req }: any) => {
    const user: any = req.user || null

    return {
      models: models[service],
      user
    }
  }
})

const alter = true
const force = false

if (!models[service]) {
  throw 'Invalid service'
}

models[service].sequelize.sync({ alter, force }).then(() => {
  apolloServer.start().then(() => {
    apolloServer.applyMiddleware({ app, path: '/graphql', cors: corsOptions })

    app.listen({ port: 4000 }, () => {
      // Setting up initial seeds
      console.log('Initializing Seeds...')
      seeds[service]()

      // eslint-disable-next-line no-console
      console.log('Running on http://localhost:4000')
    })
  })
})
