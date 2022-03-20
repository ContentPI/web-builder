import React, { FC } from 'react'

import BlogIndex from '../sites/blog/pages/index'
import SanPanchoIndex from '../sites/san-pancho/pages/index'

type PageProps = {
  site: string
}

const IndexPage: FC<PageProps> = ({ site }) => {
  switch (site) {
    case 'san-pancho':
      return <SanPanchoIndex />
    case 'blog':
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
