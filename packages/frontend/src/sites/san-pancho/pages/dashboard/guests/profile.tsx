import React, { FC } from 'react'
import ApolloConnector from '~/components/ApolloConnector'

import DashboardLayout from '~/components/Dashboard/Layout'
import GET_GUEST_BY_GOOGLE_CONTACT_ID_QUERY from './getGuestByGoogleContactId.query'

type Props = {
  params?: string[]
  data?: any
}

const Profile: FC<Props> = ({ data }) => {
  const { getGuestByGoogleContactId: profile } = data

  return (
    <DashboardLayout>
      <h2>Guest profile {profile.fullName}</h2>
    </DashboardLayout>
  )
}
const onSuccess: FC<any> = (props: any) => <Profile {...props} />
const Connector: FC<Props> = ({ params = [] }) => {
  const [googleContactId] = params

  return (
    <ApolloConnector
      query={GET_GUEST_BY_GOOGLE_CONTACT_ID_QUERY}
      onSuccess={onSuccess}
      variables={{
        googleContactId
      }}
      props={{ params }}
    />
  )
}
export default Connector
