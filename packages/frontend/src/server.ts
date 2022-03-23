import express, { Application, Request, Response } from 'express'
import next from 'next'
import path from 'path'

import Config from './config'

// Setting up Next App
const hostname = 'localhost'
const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev, hostname, port })
const handle = nextApp.getRequestHandler()

// Running Next App
nextApp.prepare().then(() => {
  // Express application
  const app: Application = express()

  // Sites static directories
  app.use(express.static(path.join(__dirname, '../public')))
  app.use(express.static(path.join(__dirname, `./sites/${Config.site}/static`)))

  // Traffic handling
  app.all('*', (req: Request, res: Response) => {
    handle(req, res)
  })

  // Listening...
  app.listen(3000)
})
