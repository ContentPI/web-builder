import { ApolloServer } from 'apollo-server-express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
// import expressJwt from 'express-jwt'
import { applyMiddleware } from 'graphql-middleware'
import { buildSchema } from 'type-graphql'

import db from './db'
import { UserResolver } from './graphql/resolvers/user'
import typeDefs from './graphql/types'

const main = async () => {
  const app = express()

  const corsOptions = {
    origin: '*',
    credentials: true
  }

  app.use(cors(corsOptions))

  app.use(cookieParser())

  // app.use(
  //   expressJwt({
  //     secret: 'xxx',
  //     algorithms: ['HS256'],
  //     credentialsRequired: false
  //   })
  // )

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })

  // Apollo Server
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false
    }),
    context: ({ req, res }) => ({
      req,
      res,
      db
    })
  })

  apolloServer.applyMiddleware({ app, path: '/graphql', cors: corsOptions })

  app.listen({ port: 4000 }, () => {
    // eslint-disable-next-line no-console
    console.log('Running on http://localhost:4000')
  })
}

main().catch((error) => {
  console.log(error)
})
