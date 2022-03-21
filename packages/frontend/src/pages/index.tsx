import React, { FC } from 'react'

import { Site } from '../types'
import Switcher from './switcher'

type Props = {
  site: Site
}

const Page: FC<Props> = ({ site }) => <Switcher site={site} page="index" />

export const getServerSideProps = async () => ({
  props: {
    site: process.env.SITE
  }
})

export default Page
