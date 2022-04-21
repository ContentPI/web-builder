import React, { FC, ReactElement } from 'react'

import Sidebar from '~/components/Dashboard/Sidebar'
import { CSS } from './Layout.styled'

type Props = {
  children: ReactElement
}

const DashboardLayout: FC<Props> = ({ children }) => (
  <CSS.DashboardLayout>
    <CSS.Header>
      <img src="/images/logo.png" alt="Logo" />
    </CSS.Header>

    <CSS.FlexWrapper>
      <Sidebar />
    </CSS.FlexWrapper>
  </CSS.DashboardLayout>
)

export default DashboardLayout
