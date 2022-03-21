import dynamic from 'next/dynamic'
import React, { FC } from 'react'

import { Site } from '../types'

const dynamicPages: Record<string, Record<string, any>> = {
  [Site.CodeJobs]: {
    index: dynamic(() => import('../sites/codejobs/pages/index'))
    // login: dynamic(() => import('../sites/codejobs/pages/login'))
  },
  [Site.SanPancho]: {
    index: dynamic(() => import('../sites/san-pancho/pages/index')),
    login: dynamic(() => import('../sites/san-pancho/pages/login'))
  }
}

type Props = {
  site: Site
  page: string
  props?: Record<string, any>
}

const Switcher: FC<Props> = ({ site, page, props = {} }) => {
  const PageToRender = dynamicPages[site][page]
  return <PageToRender {...props} />
}

export const getServerSideProps = async () => ({
  notFound: true
})

export default Switcher
