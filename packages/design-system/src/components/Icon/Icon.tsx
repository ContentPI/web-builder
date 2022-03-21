// Dependencies
import React, { FC, ReactElement } from 'react'
import { cx } from '@contentpi/lib'

interface Props {
  children?: ReactElement | string
  className?: string
  type?: string
  title?: string
  library?: 'fontawesome' | 'feather' | 'material'
  fill?: string
  stroke?: string
  width?: number
  height?: number
  background?: string
  onClick?(): void
}

const Icon: FC<Props> = props => {
  const { type, className = '', children, library = 'fontawesome', width = 24 } = props
  const height = props.height !== width ? width : 24
  const iconProps = { ...props }

  delete iconProps.type
  delete iconProps.className
  delete iconProps.library

  let style = {}

  if (library === 'fontawesome') {
    delete iconProps.width
    delete iconProps.height
  }

  if (props.onClick) {
    style = {
      cursor: 'pointer'
    }
  }

  if (library !== 'fontawesome') {
    const CustomIcon = require(`./icons/${library}/${type}.svg`).default
    iconProps.width = width
    iconProps.height = height

    return <CustomIcon {...iconProps} />
  }

  if (children) {
    return (
      <i style={style} {...iconProps} className={cx('Icon', className)}>
        {children}
      </i>
    )
  }

  return <i style={style} {...iconProps} className={cx('Icon', `${type} ${className}`)} />
}

export default Icon
