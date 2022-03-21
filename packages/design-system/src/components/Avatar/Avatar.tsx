// Dependencies
import React, { FC } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Types
import { Shape, Color } from '../../types'

// Styles
import { Avatar, BASE_CLASS_NAME } from './Avatar.styled'

interface IProps {
  color?: Color
  shape?: Shape
}

const AvatarComponent: FC<IProps> = ({
  children,
  color = Color.primary,
  shape = Shape.round,
  ...restProps
}) => {
  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [color, shape],
  })

  return (
    <Avatar className={classNames} {...restProps}>
      {children}
    </Avatar>
  )
}

export default AvatarComponent
