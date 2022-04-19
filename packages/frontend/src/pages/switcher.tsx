import dynamic from 'next/dynamic'
import React, { FC } from 'react'

import Helmet from '~/components/Helmet'
import Config from '~/config'
import { Site } from '../types'

const dynamicPages: Record<string, Record<string, any>> = {
  [Site.CodeJobs]: {
    index: dynamic(() => import('../sites/codejobs/pages/index')),
    login: dynamic(() => import('../sites/codejobs/pages/login')),
    dashboard: dynamic(() => import('../sites/codejobs/pages/dashboard'))
  },
  [Site.SanPancho]: {
    index: dynamic(() => import('../sites/san-pancho/pages/index')),
    login: dynamic(() => import('../sites/san-pancho/pages/login')),
    dashboard: dynamic(() => import('../sites/san-pancho/pages/dashboard'))
  }
}

type Props = {
  site: Site
  page: string
  siteTitle: string
  props?: Record<string, any>
}

const Switcher: FC<Props> = ({ site, page, props = {}, siteTitle }) => {
  const PageToRender = dynamicPages[site][page]

  return (
    <>
      <Helmet title={page as string} site={siteTitle || ''} />

      <PageToRender {...props} />
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
