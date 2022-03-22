import { Button, TextField } from '@web-builder/design-system'
import React, { FC } from 'react'

import { CSSLogin, CSSLoginBox } from './Login.styled'

type Props = {
  background?: string
}

const Login: FC<Props> = () => (
  <CSSLogin>
    <CSSLoginBox>
      <header>
        <img className="logo" src="/images/isotype.png" alt="Logo" /> <br />
        <h2>Sign into your Account</h2>
      </header>

      <section>
        <TextField label="Email" name="email" placeholder="Email" />

        <TextField label="Password" name="password" placeholder="Password" />

        <div className="forgot">Forgot password</div>

        <div className="actions">
          <Button>Login</Button>
          <Button color="success">Register</Button>
        </div>
      </section>
    </CSSLoginBox>
  </CSSLogin>
)

export default Login
