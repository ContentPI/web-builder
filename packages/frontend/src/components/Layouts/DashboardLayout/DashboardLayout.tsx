import React, { FC, ReactElement, useState } from 'react'

import { CSS } from './DashboardLayout.styled'

type Props = {
  children: ReactElement
}

const DashboardLayout: FC<Props> = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState()

  const openMenu = () => {}

  return (
    <CSS.DashboardLayout>
      <CSS.Header>
        <img src="/images/logo.png" alt="Logo" />
      </CSS.Header>

      <CSS.FlexWrapper>
        <CSS.Sidebar>
          <h4>MENU</h4>

          <ul className="menu">
            <li>
              <a href="#" onClick={() => openMenu('dashboard')}>
                Dashboard
              </a>
              <ul className="submenu">
                <li>
                  <a href="#">Option 1</a>
                </li>
                <li>
                  <a href="#">Option 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">UI Elements</a>
              <ul className="submenu">
                <li>
                  <a href="#">Option 1</a>
                </li>
                <li>
                  <a href="#">Option 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">UI Elements</a>
            </li>
            <li>
              <a href="#">UI Elements</a>
            </li>
            <li>
              <a href="#">UI Elements</a>
            </li>
          </ul>
        </CSS.Sidebar>
      </CSS.FlexWrapper>
    </CSS.DashboardLayout>
  )
}

export default DashboardLayout
