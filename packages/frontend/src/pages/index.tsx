import React, { FC } from 'react'

import BlogIndex from '../sites/blog/pages/index'
import SanPanchoIndex from '../sites/san-pancho/pages/index'
import { Site } from '../types'

type PageProps = {
  site: string
}

const IndexPage: FC<PageProps> = ({ site }) => {
  switch (site) {
    case Site.SanPancho:
      return <SanPanchoIndex />
    case Site.Blog:
      return <BlogIndex />
    default:
      return <h1>Index</h1>
  }
}

export const getServerSideProps = async () => ({
  props: {
    site: process.env.SITE
  }
})

export default IndexPage
