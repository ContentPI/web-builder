import { cx } from '@web-builder/utils'
import React, { FC } from 'react'

import { Alignment, Color, Shape } from '../../types'
import { Alert, BASE_CLASS_NAME } from './Alert.styled'

type Props = {
  alignment?: Alignment
  color?: Color
  shape?: Shape
  fullWidth?: boolean
}

const AlertComponent: FC<Props> = ({
  alignment = Alignment.left,
  color = Color.primary,
  children,
  shape = Shape.regular,
  ...alertProps
}) => {
  const classes = [alignment, shape, color]

  const classNames = cx.generate({
    ccn: BASE_CLASS_NAME,
    data: classes
  })

  return (
    <Alert data-component="Alert" className={classNames} {...alertProps}>
      {children}
    </Alert>
  )
}

export default AlertComponent
