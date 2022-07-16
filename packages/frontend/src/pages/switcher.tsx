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
  [Site.ContentPI]: {
    index: {
      index: dynamic(() => import('../sites/contentpi/pages/index'))
    },
    login: {
      index: dynamic(() => import('../sites/contentpi/pages/login'))
    },
    dashboard: {
      index: dynamic(() => import('../sites/contentpi/pages/dashboard')),
      app: dynamic(() => import('../sites/contentpi/pages/dashboard/App/index'))
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
      profile: dynamic(() => import('../sites/san-pancho/pages/dashboard/guests/profile')),
      reservations: dynamic(
        () => import('../sites/san-pancho/pages/dashboard/reservations/reservations')
      )
    }
  }
}

type Route = {
  page: string
  section?: string
  urlParams?: string[]
  queryParams?: Record<string, string>
  appId?: string
}

type Props = {
  site: Site
  routeParams: Route
  siteTitle: string
  props?: Record<string, any>
}

const Switcher: FC<Props> = ({ site, routeParams, props = {}, siteTitle }) => {
  const { page, urlParams = [], queryParams = {}, appId, stage } = routeParams
  const [section = 'index', ...urlMoreParams] = urlParams
  const mergedParams = {
    urlParams: urlMoreParams,
    queryParams
  }

  let pageName = page
  let sectionName = section
  let PageToRender

  if (appId) {
    pageName = 'dashboard'
    sectionName = 'app'
  }

  if (pageName) {
    PageToRender = dynamicPages[site][pageName]
  }

  if (pageName && sectionName) {
    PageToRender = dynamicPages[site][pageName][sectionName]
  }

  return (
    <>
      <Helmet title={page as string} site={siteTitle || ''} />

      <PageToRender {...props} {...mergedParams} />
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
