import { makeExecutableSchema } from '@graphql-tools/schema'
import { ts } from '@web-builder/utils'
import { ApolloServer } from 'apollo-server-express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import { applyMiddleware } from 'graphql-middleware'

import { Service } from './types/config'

const service: any = process.env.SERVICE ?? 'blank-service'

if (!ts.includes(Service, service)) {
  throw 'Invalid service'
}

const resolvers = require(`./services/${service}/graphql/resolvers`).default
const typeDefs = require(`./services/${service}/graphql/types`).default
const models = require(`./services/${service}/models`).default
const seeds = require(`./services/${service}/seeds`).default

const app = express()

const corsOptions = {
  origin: '*',
  credentials: true
}

app.use(cors(corsOptions))

app.use(cookieParser())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// Schema
const schema = applyMiddleware(
  makeExecutableSchema({
    typeDefs,
    resolvers
  })
)

// Apollo Server
const apolloServer = new ApolloServer({
  schema,
  context: async () => ({
    models
  })
})

const alter = true
const force = false

models.sequelize.sync({ alter, force }).then(() => {
  apolloServer.start().then(() => {
    apolloServer.applyMiddleware({ app, path: '/graphql', cors: corsOptions })

    app.listen({ port: 4000 }, () => {
      // Setting up initial seeds
      console.log('Initializing Seeds...')
      seeds()

      // eslint-disable-next-line no-console
      console.log('Running on http://localhost:4000')
    })
  })
})
