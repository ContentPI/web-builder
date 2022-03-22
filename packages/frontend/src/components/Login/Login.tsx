import { Input } from '@web-builder/design-system'
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
        Sign into your Account
      </header>

      <section />
    </CSSLoginBox>
  </CSSLogin>
)

export default Login
