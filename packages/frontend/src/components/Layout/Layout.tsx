import React, { FC, ReactElement } from 'react'

interface Props {
  children: ReactElement
}

const Layout: FC<Props> = ({ children }) => (
  <CSSDashboardLayout>
    <Menu />
    {children}
  </CSSDashboardLayout>
)

export default MainLayout
Terms
