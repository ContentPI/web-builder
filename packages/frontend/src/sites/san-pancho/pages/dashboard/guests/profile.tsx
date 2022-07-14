import React, { FC } from 'react'

import ApolloConnector from '~/components/ApolloConnector'
import DashboardLayout from '~/components/Dashboard/Layout'
import GET_GUEST_BY_GOOGLE_CONTACT_ID_QUERY from './getGuestByGoogleContactId.query'

type ProfileProps = {
  data?: any
}

type ConnectorProps = {
  urlParams: string[]
}

const Profile: FC<ProfileProps> = ({ data }) => {
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
const Connector: FC<ConnectorProps> = ({ urlParams }) => {
  const [googleContactId] = urlParams

  return (
    <ApolloConnector
      query={GET_GUEST_BY_GOOGLE_CONTACT_ID_QUERY}
      onSuccess={onSuccess}
      variables={{
        googleContactId
      }}
      props={{}}
    />
  )
}
export default Connector
