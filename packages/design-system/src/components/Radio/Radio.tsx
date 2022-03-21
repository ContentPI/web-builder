// Dependencies
import React, { FC, ComponentPropsWithoutRef } from 'react'
import { cxGenerator, cx } from '@contentpi/lib'

// Types
import { Color, Shape } from '../../types'

// Styles
import { Radio, RadioWrapper, RadioChild, RadioText, BASE_CLASS_NAME } from './Radio.styled'

interface IProps extends ComponentPropsWithoutRef<'input'> {
  color?: Color
  checked?: boolean
  label?: string
  name?: string
  onClick?(): void
  value?: string
  shape?: Shape
}

const RadioComponent: FC<IProps> = ({
  label,
  checked,
  color = Color.primary,
  shape = Shape.round,
  ...checkboxProps
}) => {
  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [color, shape],
  })

  return (
    <RadioWrapper data-component="Checkbox">
      <>
        <RadioText>{label}</RadioText>
        <Radio {...checkboxProps} type="radio" checked={checked} />
        <RadioChild className={cx(classNames, 'checkmark')} />
      </>
    </RadioWrapper>
  )
}

export default RadioComponent
