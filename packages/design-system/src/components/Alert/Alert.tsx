// Dependencies
import React, { FC } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Types
import { Alignment, Color, Shape } from '../../types'

// Styles
import { Alert, BASE_CLASS_NAME } from './Alert.styled'

interface IProps {
  alignment?: Alignment
  color?: Color
  shape?: Shape
  fullWidth?: boolean
}

const AlertComponent: FC<IProps> = ({
  alignment = Alignment.left,
  color = Color.primary,
  children,
  shape = Shape.regular,
  ...alertProps
}) => {
  const classes = [alignment, shape, color]

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: classes,
  })

  return (
    <Alert data-component="Alert" className={classNames} {...alertProps}>
      {children}
    </Alert>
  )
}

export default AlertComponent
