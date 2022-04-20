import { cx } from '@web-builder/utils'
import React, { FC } from 'react'

import { BASE_CLASS_NAME, CSS } from './Paper.styled'

interface IProps {
  className?: string
}

const Paper: FC<IProps> = ({ children, className }) => {
  const classNames = cx.generate({
    ccn: BASE_CLASS_NAME,
    data: [],
    className
  })

  return <CSS.PaperBase className={classNames}>{children}</CSS.PaperBase>
}

export default Paper
