import { useRouter } from 'next/router'
import React, { FC } from 'react'

import Config from '~/config'
import { Site } from '../../types'
import SwitcherPage from '../switcher'

type Props = {
  site: Site
  siteTitle: string
}

const Page: FC<Props> = ({ site, siteTitle }) => {
  const router = useRouter()
  const { page = 'index' } = router.query

  const route = {
    page: page as string
  }

  return <SwitcherPage site={site} routeParams={route} siteTitle={siteTitle} />
}

export const getServerSideProps = async () => ({
  props: {
    site: process.env.SITE,
    siteTitle: Config.siteTitle
  }
})

export default Page
