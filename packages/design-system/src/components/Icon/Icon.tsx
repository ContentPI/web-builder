import { cx } from '@web-builder/utils'
import React, { FC, ReactElement } from 'react'

type Props = {
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

const Icon: FC<Props> = ({
  height,
  type,
  className = '',
  children,
  library = 'fontawesome',
  width = 24,
  onClick,
  ...props
}) => {
  const h = height !== width ? width : 24
  const iconProps: any = { ...props }

  let style = {}

  if (onClick) {
    style = {
      cursor: 'pointer'
    }
  }

  if (library !== 'fontawesome') {
    const CustomIcon = require(`./icons/${library}/${type}.svg`).default
    iconProps.width = width
    iconProps.height = h

    return <CustomIcon {...iconProps} />
  }

  if (children) {
    return (
      <i onClick={onClick} style={style} {...iconProps} className={cx.join('Icon', className)}>
        {children}
      </i>
    )
  }

  return (
    <i
      onClick={onClick}
      style={style}
      {...iconProps}
      className={cx.join('Icon', `${type} ${className}`)}
    />
  )
}

export default Icon
