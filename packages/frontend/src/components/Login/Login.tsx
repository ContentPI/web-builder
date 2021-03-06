import { Button, Input, Notification, RenderIf } from '@web-builder/design-system'
import { useI18n } from '@web-builder/i18n'
import { getRedirectToUrl, redirectTo } from '@web-builder/utils'
import React, { FC, useContext, useState } from 'react'

import Config from '~/config'
import { FormContext } from '~/contexts/form'
import { UserContext } from '~/contexts/user'
import { CSS } from './Login.styled'

type Props = {
  background?: string
}

const Login: FC<Props> = () => {
  const redirectToUrl = getRedirectToUrl()

  // States
  const [values, setValues] = useState({
    emailOrUsername: '',
    password: ''
  })

  const [notification, setNotification] = useState({
    id: Math.random(),
    message: ''
  })

  const [invalidLogin, setInvalidLogin] = useState(false)

  // Contexts
  const { change } = useContext(FormContext)
  const { login } = useContext(UserContext)
  const { t } = useI18n()

  // Methods
  const onChange = (e: any): any => change(e, setValues)

  const handleSubmit = async (user: any): Promise<void> => {
    const response = await login(user)

    if (response.error) {
      setInvalidLogin(true)
      setNotification({
        id: Math.random(),
        message: response.message
      })
    } else {
      redirectTo(redirectToUrl || '/', true)
    }
  }

  return (
    <>
      <RenderIf isTrue={invalidLogin && notification.message !== ''}>
        <Notification
          notification={notification}
          type="error"
          position="bottom-right"
          maxNotifications={5}
          duration={5}
        />
      </RenderIf>

      <CSS.Login>
        <CSS.LoginBox>
          <header>
            <img className="logo" src="/images/isotype.png" alt="Logo" data-testid="logo" /> <br />
            <h2 data-testid="signin">{t('login.signIn')}</h2>
          </header>

          <section>
            <Input
              autoComplete="off"
              name="emailOrUsername"
              placeholder={t('emailOrUsername')}
              data-testid="email"
              onChange={onChange}
              value={values.emailOrUsername}
            />

            <Input
              name="password"
              type="password"
              placeholder={t('password')}
              data-testid="password"
              onChange={onChange}
              value={values.password}
            />

            <div className="forgot" data-testid="forgot">
              {t('forgotPassword')}
            </div>

            <div className="actions">
              <Button onClick={(): Promise<void> => handleSubmit(values)} data-testid="login">
                {t('login')}
              </Button>
              <Button color="success" data-testid="register">
                {t('register')}
              </Button>
            </div>
          </section>
        </CSS.LoginBox>

        <p className="footer">
          {t('login.footer', { site: Config.siteTitle, name: 'Web Builder' })}
        </p>
      </CSS.Login>
    </>
  )
}

export default Login
