import { makeExecutableSchema } from '@graphql-tools/schema'
import { secretKey } from '@web-builder/authentication'
import { ApolloServer } from 'apollo-server-express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import expressJwt from 'express-jwt'
import { applyMiddleware } from 'graphql-middleware'

const service = process.env.SERVICE ?? 'blank-service'

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
    typeDefs,
    resolvers
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

if (!service) {
  throw 'Invalid service'
}

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
