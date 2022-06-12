import dynamic from 'next/dynamic'
import React, { FC } from 'react'

import Helmet from '~/components/Helmet'
import Config from '~/config'
import { Site } from '~/types'

const dynamicPages: Record<string, Record<string, any>> = {
  [Site.CodeJobs]: {
    index: {
      index: dynamic(() => import('../sites/codejobs/pages/index'))
    },
    login: {
      index: dynamic(() => import('../sites/codejobs/pages/login'))
    },
    dashboard: {
      index: dynamic(() => import('../sites/codejobs/pages/dashboard'))
    }
  },
  [Site.SanPancho]: {
    index: {
      index: dynamic(() => import('../sites/san-pancho/pages/index'))
    },
    login: {
      index: dynamic(() => import('../sites/san-pancho/pages/login'))
    },
    dashboard: {
      index: dynamic(() => import('../sites/san-pancho/pages/dashboard')),
      guests: dynamic(() => import('../sites/san-pancho/pages/dashboard/guests/list')),
      profile: dynamic(() => import('../sites/san-pancho/pages/dashboard/guests/profile'))
    }
  }
}

type Route = {
  page: string
  section?: string
  params?: string[]
}

type Props = {
  site: Site
  route: Route
  siteTitle: string
  props?: Record<string, any>
}

const Switcher: FC<Props> = ({ site, route, props = {}, siteTitle }) => {
  const { page, params = [] } = route
  const [section = 'index', ...moreParams] = params
  let PageToRender

  if (page) {
    PageToRender = dynamicPages[site][page]
  }

  if (page && section) {
    PageToRender = dynamicPages[site][page][section]
  }

  return (
    <>
      <Helmet title={page as string} site={siteTitle || ''} />

      <PageToRender {...props} params={moreParams} />
    </>
  )
}

export const getServerSideProps = async () => ({
  notFound: true,
  props: {
    siteTitle: Config.siteTitle
  }
})

export default Switcher
