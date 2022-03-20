import express, { Application, Request, Response } from 'express'
import next from 'next'

// Setting up Next App
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

// Running Next App
nextApp.prepare().then(() => {
  const app: Application = express()

  app.all('*', (req: Request, res: Response) => {
    handle(req, res)
  })

  app.listen(3000)
})
