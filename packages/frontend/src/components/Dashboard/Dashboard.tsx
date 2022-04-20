import React, { FC } from 'react'

import DashboardLayout from '~/components/Layouts/DashboardLayout'

type Props = {
  background?: string
}

const Dashboard: FC<Props> = () => (
  <DashboardLayout>
    <h2>Dash</h2>
  </DashboardLayout>
)

export default Dashboard
