import { availableLocales, getUserLanguage } from '@web-builder/i18n'
import cookieParser from 'cookie-parser'
import express, { Application, NextFunction, Request, Response } from 'express'
import { google } from 'googleapis'
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

  // Google API
  const { OAuth2 } = google.auth

  // Cookies
  app.use(cookieParser())

  // Sites static directories
  app.use(express.static(path.join(__dirname, '../public')))
  app.use(express.static(path.join(__dirname, `./sites/${Config.site}/static`)))

  const getAllGoogleContacts = async (
    googleApi: any,
    current: string[] = [],
    pageToken = undefined
  ): Promise<any> => {
    const {
      data: { connections, nextPageToken, totalItems }
    } = await googleApi.connections.list({
      resourceName: 'people/me',
      pageSize: 1000,
      personFields:
        'names,emailAddresses,phoneNumbers,birthdays,urls,photos,addresses,userDefined,biographies,metadata,organizations',
      ...(pageToken ? { pageToken } : {}),
      sortOrder: 'FIRST_NAME_ASCENDING'
    })

    // merge contacts from this request with data from your previous requests
    const contacts = [...current, ...connections]

    if (nextPageToken && contacts.length < totalItems) {
      return getAllGoogleContacts(googleApi, contacts, nextPageToken)
    }

    return contacts
  }

  app.get('/dashboard/import/contacts', async (req: Request, res: Response) => {
    const clientId = process.env.GOOGLE_API_CLIENT_ID
    const clientSecret = process.env.GOOGLE_API_CLIENT_SECRET
    const refreshToken = process.env.GOOGLE_API_REFRESH_TOKEN

    try {
      const oAuth2Client = new OAuth2(clientId, clientSecret)

      oAuth2Client.setCredentials({
        refresh_token: refreshToken
      })

      const { people } = google.people({ version: 'v1', auth: oAuth2Client })
      const contacts: any = []
      const response = await getAllGoogleContacts(people)
      console.log('contacts=====', response)
      response.forEach((contact: any) => {
        const {
          names = [{}],
          emailAddresses = [{}],
          photos = [{}],
          phoneNumbers = [{}],
          urls = [{}],
          addresses = [{}],
          userDefined = [{}],
          biographies = [{}],
          metadata = [{}],
          organizations = [{}],
          birthdays = [{}]
        } = contact

        const guest = {
          googleContactId: metadata.sources[0].id,
          fullName: names[0].displayName,
          email: emailAddresses[0].value,
          photo: photos[0].url.replace('=s100', '') || '',
          phone:
            phoneNumbers[0].canonicalForm ||
            phoneNumbers[0].value ||
            phoneNumbers[0].formattedType ||
            '+52',
          socialMedia: urls[0].value || '',
          location: addresses[0].city || '',
          gender: userDefined[0].value || '',
          organization: organizations[0].name || '',
          note: biographies[0].value || '',
          birthday: birthdays[0].text || ''
        }

        contacts.push(guest)
      })

      res.send(contacts)
    } catch (e) {
      res.send(e)
    }
  })

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
