import { capitalize } from '@web-builder/utils'
import Head from 'next/head'
import React, { FC } from 'react'

type Props = {
  title: string
  site: string
}

const Helmet: FC<Props> = ({ title, site }) => {
  const updatedTitle = title && title !== 'index' ? `${capitalize(title)} - ${site}` : site

  return (
    <Head>
      <title>{updatedTitle}</title>
    </Head>
  )
}

export default Helmet
