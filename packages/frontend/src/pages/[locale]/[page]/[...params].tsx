import { isUUID } from '@web-builder/utils'
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

  const routeParams = {
    page: page as string,
    urlParams: params as string[],
    queryParams: {
      ...(pageNumber && { pageNumber: pageNumber as string })
    },
    appId: '',
    stage: ''
  }

  if (isUUID(params[0])) {
    const appId = params[0]
    const stage = params[1]

    routeParams.appId = appId
    routeParams.stage = stage
  }

  return <SwitcherPage site={site} routeParams={routeParams} siteTitle={siteTitle} />
}

export const getServerSideProps = async () => ({
  props: {
    site: process.env.SITE,
    siteTitle: Config.siteTitle
  }
})

export default Page
