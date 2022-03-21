import { cx } from '@web-builder/utils'
import React, { FC } from 'react'

import { Color, Shape } from '../../types'
import { Avatar, BASE_CLASS_NAME } from './Avatar.styled'

type Props = {
  color?: Color
  shape?: Shape
}

const AvatarComponent: FC<Props> = ({
  children,
  color = Color.primary,
  shape = Shape.round,
  ...restProps
}) => {
  const classNames = cx.generate({
    ccn: BASE_CLASS_NAME,
    data: [color, shape]
  })

  return (
    <Avatar className={classNames} {...restProps}>
      {children}
    </Avatar>
  )
}

export default AvatarComponent
