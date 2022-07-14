import { useRouter } from 'next/router'
import React, { FC } from 'react'

import Config from '~/config'
import SwitcherPage from '~/pages/switcher'
import { Site } from '~/types'

type Props = {
  site: Site
  siteTitle: string
}

const Page: FC<Props> = ({ site, siteTitle }) => {
  const router = useRouter()
  const { page = 'index', params = [], pageNumber } = router.query

  const route = {
    page: page as string,
    urlParams: params as string[],
    queryParams: {
      ...(pageNumber && { pageNumber: pageNumber as string })
    }
  }

  return <SwitcherPage site={site} route={route} siteTitle={siteTitle} />
}

export const getServerSideProps = async () => ({
  props: {
    site: process.env.SITE,
    siteTitle: Config.siteTitle
  }
})

export default Page
