import { cx } from '@web-builder/utils'
import React, { FC, ReactElement, useState } from 'react'

import Header from './Header'
import { CSS } from './Layout.styled'
import Sidebar from './Sidebar'

type Props = {
  children: ReactElement
}

const DashboardLayout: FC<Props> = () => {
  const [openMenu, setOpenMenu] = useState(true)

  const handleMenu = () => setOpenMenu(!openMenu)

  return (
    <>
      <CSS.GlobalStyle />
      <CSS.DashboardLayout>
        <CSS.FlexWrapper>
          {openMenu && <Sidebar />}
          <div className={openMenu ? 'wrapper' : 'full'}>
            <Header handleMenu={handleMenu} />
          </div>

          <div className={cx.join('blocks', openMenu ? 'wrapper' : 'full')}>
            <CSS.Content>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
            </CSS.Content>
          </div>
        </CSS.FlexWrapper>
      </CSS.DashboardLayout>
    </>
  )
}

export default DashboardLayout
