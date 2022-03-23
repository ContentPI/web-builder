import { Button, TextField } from '@web-builder/design-system'
import React, { FC } from 'react'

import Config from '~/config'
import { useI18n } from '~/contexts/i18n'
import { CSSLogin, CSSLoginBox } from './Login.styled'

type Props = {
  background?: string
}

const Login: FC<Props> = () => {
  const { t } = useI18n()

  return (
    <CSSLogin>
      <CSSLoginBox>
        <header>
          <img className="logo" src="/images/isotype.png" alt="Logo" data-testid="logo" /> <br />
          <h2 data-testid="signin">{t('login.signIn')}</h2>
        </header>

        <section>
          <TextField
            label={t('login.email')}
            name="email"
            placeholder={t('login.email')}
            data-testid="email"
          />

          <TextField
            label={t('login.password')}
            name="password"
            placeholder={t('login.password')}
            data-testid="password"
          />

          <div className="forgot" data-testid="forgot">
            {t('login.forgot')}
          </div>

          <div className="actions">
            <Button data-testid="login">{t('login.login')}</Button>
            <Button color="success" data-testid="register">
              {t('login.register')}
            </Button>
          </div>
        </section>
      </CSSLoginBox>

      <p className="footer">{t('login.footer', { site: Config.siteTitle, name: 'Web Builder' })}</p>
    </CSSLogin>
  )
}

export default Login
