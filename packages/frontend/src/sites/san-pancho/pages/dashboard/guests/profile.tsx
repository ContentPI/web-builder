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
      <>
        <h2>Guest profile </h2>
        <img src={profile.photo} alt={profile.fullName} />
        <h3>Profile Name: {profile.fullName}</h3>
        <h3>Media: {profile.socialMedia}</h3>
        <h3>Phone: {profile.phone}</h3>
        <h3>Email: {profile.email}</h3>
        <h3>gender: {profile.gender}</h3>
        <h3>Birthday: {profile.birthday}</h3>
        <h3>Location: {profile.location}</h3>
      </>
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
