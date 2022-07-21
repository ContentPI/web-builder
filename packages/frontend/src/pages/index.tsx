import React, { FC } from 'react'

import Config from '~/config'
import { Site } from '../types'
import Switcher from './switcher'

type Props = {
  site: Site
  siteTitle: string
}

const Page: FC<Props> = ({ site, siteTitle }) => {
  const route = {
    page: 'index'
  }

  return <Switcher site={site} routeParams={route} siteTitle={siteTitle} />
}

export const getServerSideProps = async () => ({
  props: {
    site: process.env.SITE,
    siteTitle: Config.siteTitle
  }
})

export default Page
