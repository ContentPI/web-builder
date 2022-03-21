import { cx } from '@web-builder/utils'
import React, { FC } from 'react'

import { BASE_CLASS_NAME, PaperBase } from './Paper.styled'

interface IProps {
  className?: string
}

const Paper: FC<IProps> = ({ children, className }) => {
  const classNames = cx.generate({
    ccn: BASE_CLASS_NAME,
    data: [],
    className
  })

  return <PaperBase className={classNames}>{children}</PaperBase>
}

export default Paper
