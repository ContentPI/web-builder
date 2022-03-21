import { useRouter } from 'next/router'
import React, { FC } from 'react'

import { Site } from '../../types'
import SwitcherPage from '../switcher'

type Props = {
  site: Site
}

const Page: FC<Props> = ({ site }) => {
  const router = useRouter()
  const { page = 'index' } = router.query

  return <SwitcherPage site={site} page={page as string} />
}

export const getServerSideProps = async () => ({
  props: {
    site: process.env.SITE
  }
})

export default Page
