import { isValidLocale } from '@web-builder/i18n'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import Config from '~/config'
import { Site } from '../../types'
import SwitcherPage from '../switcher'

type Props = {
  site: Site
  siteTitle: string
}

const Page: FC<Props> = ({ site, siteTitle }) => {
  const router = useRouter()
  const { page = 'index', locale = 'en' } = router.query
  let newPage = page

  if (!isValidLocale(locale as string)) {
    newPage = locale
  }

  return <SwitcherPage site={site} page={newPage as string} siteTitle={siteTitle} />
}

export const getServerSideProps = async () => ({
  props: {
    site: process.env.SITE,
    siteTitle: Config.siteTitle
  }
})

export default Page
