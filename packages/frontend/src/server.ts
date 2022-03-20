import express, { Application, Request, Response } from 'express'
import next from 'next'
import path from 'path'

// Setting up Next App
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

// Running Next App
nextApp.prepare().then(() => {
  // Express application
  const app: Application = express()

  // Sites static directories
  app.use(express.static(path.join(__dirname, './sites/blog/static')))
  app.use(express.static(path.join(__dirname, './sites/san-pancho/static')))

  // Traffic handling
  app.all('*', (req: Request, res: Response) => {
    handle(req, res)
  })

  // Listening...
  app.listen(3000)
})
