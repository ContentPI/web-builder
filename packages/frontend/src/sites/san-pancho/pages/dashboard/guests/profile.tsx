import React, { FC } from 'react'

import DashboardLayout from '~/components/Dashboard/Layout'

type Props = {
  params?: string[]
}

const Profile: FC<Props> = ({ params = [] }) => {
  const [id] = params

  return (
    <DashboardLayout>
      <h2>Guest profile {id}</h2>
    </DashboardLayout>
  )
}

export default Profile
