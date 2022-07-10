import React, { FC } from 'react'

import ApolloConnector from '~/components/ApolloConnector'
import Cards from './Cards'
import GET_APPS_QUERY from './getApps.query'
import { CSS } from './MyApps.styled'

const MyApps: FC<any> = ({ apps }) => (
  <CSS.MyApps>
    <div className="header">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
    </div>

    <Cards items={apps} />
  </CSS.MyApps>
)

const onSuccess: FC<any> = (data: any) => <MyApps apps={data.getApps} />
const Connector: FC = () => <ApolloConnector query={GET_APPS_QUERY} onSuccess={onSuccess} />

export default Connector
