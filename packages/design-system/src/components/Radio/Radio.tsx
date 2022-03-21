import { cx, cxGenerator } from '@contentpi/lib'
import React, { ComponentPropsWithoutRef, FC } from 'react'

import { Color, Shape } from '../../types'
import { BASE_CLASS_NAME, Radio, RadioChild, RadioText, RadioWrapper } from './Radio.styled'

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
    data: [color, shape]
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
