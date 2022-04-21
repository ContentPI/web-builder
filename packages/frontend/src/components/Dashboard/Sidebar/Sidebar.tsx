import { Icon } from '@web-builder/design-system'
import { useI18n } from '@web-builder/i18n'
import { cx } from '@web-builder/utils'
import React, { FC, useState } from 'react'

import Config from '~/config'
import { CSS } from './Sidebar.styled'

const { sidebar } = require(`../../../sites/${Config.site}/data/dashboard/sidebar`)

const Sidebar: FC = () => {
  const [activeSection, setActiveSection] = useState('')

  const { t } = useI18n()

  const openMenu = (section: string) => {
    setActiveSection(activeSection !== section ? section : '')
  }

  return (
    <CSS.Sidebar>
      <h4>{t(sidebar.title)}</h4>

      <ul className="menu">
        {sidebar.menu.map((item: any) => (
          <li key={item.title}>
            <a href={item.url} onClick={() => openMenu(item.title)}>
              {item.icon && (
                <CSS.Item>
                  <Icon type={item.icon} library="feather" />
                  {t(item.title)}{' '}
                </CSS.Item>
              )}
              {item.subMenu && (
                <CSS.Icon>
                  <Icon
                    type={`chevron-${activeSection === item.title ? 'down' : 'up'}`}
                    library="feather"
                  />
                </CSS.Icon>
              )}
            </a>
            {item.subMenu && (
              <ul className={cx.join('submenu', activeSection === item.title ? 'active' : '')}>
                {item.subMenu.map((subItem: any) => (
                  <li key={subItem.title}>
                    <a href={subItem.url}>{t(subItem.title)}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </CSS.Sidebar>
  )
}

export default Sidebar
