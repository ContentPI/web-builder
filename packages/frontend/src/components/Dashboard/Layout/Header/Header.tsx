import { Icon } from '@web-builder/design-system'
import { useI18n } from '@web-builder/i18n'
import React, { FC, useState } from 'react'

import Config from '~/config'
import { CSS } from './Header.styled'

type Props = {
  handleMenu: () => void
}

const Header: FC<Props> = ({ handleMenu }) => {
  const { t } = useI18n()

  return (
    <CSS.Header>
      <div className="menu-opener" onClick={handleMenu}>
        <Icon type="menu" library="feather" />
      </div>
    </CSS.Header>
  )
}

export default Header
