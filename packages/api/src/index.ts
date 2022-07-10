import { makeExecutableSchema } from '@graphql-tools/schema'
import { secretKey } from '@web-builder/authentication'
import { ApolloServer } from 'apollo-server-express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import expressJwt from 'express-jwt'
import { applyMiddleware } from 'graphql-middleware'

import resolversBlog from './services/blog/graphql/resolvers'
import typeDefsBlog from './services/blog/graphql/types'
import modelsBlog from './services/blog/models'
import setInitialSeedsBlog from './services/blog/seeds'
import resolversCMS from './services/cms/graphql/resolvers'
import typeDefsCMS from './services/cms/graphql/types'
import modelsCMS from './services/cms/models'
import setInitialSeedsCMS from './services/cms/seeds'
import resolversCRM from './services/crm/graphql/resolvers'
import typeDefsCRM from './services/crm/graphql/types'
import modelsCRM from './services/crm/models'
import setInitialSeedsCRM from './services/crm/seeds'

const service = process.env.SERVICE ?? 'default'

const seeds: any = {
  cms: setInitialSeedsCMS,
  crm: setInitialSeedsCRM,
  blog: setInitialSeedsBlog
}

const models: any = {
  cms: modelsCMS,
  crm: modelsCRM,
  blog: modelsBlog
}

const resolvers: any = {
  cms: resolversCMS,
  crm: resolversCRM,
  blog: resolversBlog
}

const typeDefs: any = {
  cms: typeDefsCMS,
  crm: typeDefsCRM,
  blog: typeDefsBlog
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
const force = true

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
