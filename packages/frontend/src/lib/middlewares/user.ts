import { getUserData } from '@web-builder/authentication'
import { NextFunction, Request, Response } from 'express'

export const isConnected =
  (isLogged = true, roles = ['user'], redirectTo = '/') =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const user = await getUserData(req.cookies.at)

    if (!user && !isLogged) {
      return next()
    }

    if (user && isLogged) {
      if (roles.includes('god') && user.role === 'god') {
        return next()
      }

      if (roles.includes('admin') && user.role === 'admin') {
        return next()
      }

      if (roles.includes('editor') && user.role === 'editor') {
        return next()
      }

      if (roles.includes('user') && user.role === 'user') {
        return next()
      }

      res.redirect(redirectTo)
    } else {
      res.redirect(redirectTo)
    }
  }
