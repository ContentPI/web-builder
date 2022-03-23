import { Button, TextField } from '@web-builder/design-system'
import React, { FC } from 'react'

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
          <h2 data-testid="signin">{t('Sign into your Account')}</h2>
        </header>

        <section>
          <TextField label={t('Email')} name="email" placeholder={t('Email')} data-testid="email" />

          <TextField
            label={t('Password')}
            name="password"
            placeholder={t('Password')}
            data-testid="password"
          />

          <div className="forgot" data-testid="forgot">
            {t('Forgot Password')}
          </div>

          <div className="actions">
            <Button data-testid="login">{t('Login')}</Button>
            <Button color="success" data-testid="register">
              {t('Register')}
            </Button>
          </div>
        </section>
      </CSSLoginBox>

      <p className="footer">&copy; San Pancho - 2022 - Powered by Web Builder</p>
    </CSSLogin>
  )
}

export default Login
