import { Icon } from '@web-builder/design-system'
import React, { FC } from 'react'

import { CSS } from './Header.styled'

type Props = {
  handleMenu: () => void
}

const Header: FC<Props> = ({ handleMenu }) => (
  <CSS.Header>
    <div className="menu-opener" onClick={handleMenu}>
      <Icon type="menu" library="feather" />
    </div>
  </CSS.Header>
)

export default Header
