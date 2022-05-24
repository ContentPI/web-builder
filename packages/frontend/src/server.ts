import { availableLocales, getUserLanguage } from '@web-builder/i18n'
import cookieParser from 'cookie-parser'
import express, { Application, NextFunction, Request, Response } from 'express'
import nextJS from 'next'
import path from 'path'

import Config from './config'
import { isConnected } from './lib/middlewares/user'

// Setting up Next App
const { hostname } = Config
const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = nextJS({ dev, hostname, port })
const handle = nextApp.getRequestHandler()

// Running Next App
nextApp.prepare().then(() => {
  // Express application
  const app: Application = express()
  console.log('TEST3')
  // Cookies
  app.use(cookieParser())

  // Sites static directories
  app.use(express.static(path.join(__dirname, '../public')))
  app.use(express.static(path.join(__dirname, `./sites/${Config.site}/static`)))

  // Custom Routes
  app.get(
    [`/:locale(${availableLocales()})/login`, '/login'],
    isConnected(false),
    (req: Request, res: Response) => {
      const { locale = Config.i18n.defaultLocale } = req.params

      return nextApp.render(req, res, `/${locale}/login`, { locale })
    }
  )

  app.get([`/:locale(${availableLocales()})/logout`, '/logout'], (req: Request, res: Response) => {
    const redirect: any = req.query.redirectTo || '/'
    res.clearCookie('at')
    res.redirect(redirect)
  })

  app.get(
    ['/dashboard', `/:locale(${availableLocales()})/dashboard`],
    isConnected(
      true,
      ['god', 'admin', 'editor'],
      `/${Config.i18n.defaultLocale}/login?redirectTo=/dashboard`
    ),
    (req: Request, res: Response, next: NextFunction) => {
      const { locale = null } = req.params

      const userLanguage = getUserLanguage(
        req.headers['accept-language'] || '',
        Config.i18n.locales
      )

      if (!locale) {
        res.redirect(`/${userLanguage}/dashboard`)
      }

      return next()
    }
  )

  // Traffic handling
  app.all('*', (req: Request, res: Response) => {
    const userLanguage = getUserLanguage(req.headers['accept-language'] || '', Config.i18n.locales)

    res.cookie('userLanguage', userLanguage.toLowerCase())

    handle(req, res)
  })

  // Listening...
  app.listen(3000)
})
