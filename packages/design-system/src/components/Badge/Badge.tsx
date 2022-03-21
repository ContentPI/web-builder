// Dependencies
import React, { FC } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Types
import { Color, Shape } from '../../types'

// Styles
import { Badge, BASE_CLASS_NAME } from './Badge.styled'

interface IProps {
  color?: Color
  shape?: Shape
}

const BadgeComponent: FC<IProps> = ({ children, color = Color.primary, shape = Shape.regular }) => {
  const classes = [shape, color]

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: classes,
  })

  return (
    <Badge data-component="Badge" className={classNames}>
      {children}
    </Badge>
  )
}

export default BadgeComponent
