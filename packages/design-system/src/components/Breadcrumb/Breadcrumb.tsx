import { cxGenerator } from '@contentpi/lib'
import React, { FC, Fragment } from 'react'
import { LinkProps } from 'react-router-dom'

import Text from '../Text'
import { BASE_CLASS_NAME, Breadcrumb, BreadcrumbDivider } from './Breadcrumb.styled'

type labelBody = {
  title: string
  link?: string
}

interface IProps {
  labels: Array<labelBody>
  Link?: LinkProps | any
}

const BreadcrumbComponent: FC<IProps> = (props) => {
  const { labels, Link } = props

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: []
  })

  const items = labels.map((item, index) => {
    const isLast = labels.length - 1 === index

    return (
      <Fragment key={item.title}>
        {Link ? (
          <Link href={item.link}>
            <Text variant="subtitle2">{item.title}</Text>
          </Link>
        ) : (
          <a href={item.link}>
            <Text variant="subtitle2">{item.title}</Text>
          </a>
        )}
        {!isLast && (
          <BreadcrumbDivider>
            <Text variant="subtitle2">/</Text>
          </BreadcrumbDivider>
        )}
      </Fragment>
    )
  })

  return <Breadcrumb className={classNames}>{items}</Breadcrumb>
}

export default BreadcrumbComponent
