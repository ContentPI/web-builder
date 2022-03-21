import { cx } from '@web-builder/utils'
import React, { ComponentPropsWithoutRef, FC } from 'react'

import { Color, Shape } from '../../types'
import { BASE_CLASS_NAME, Radio, RadioChild, RadioText, RadioWrapper } from './Radio.styled'

interface Props extends ComponentPropsWithoutRef<'input'> {
  color?: Color
  checked?: boolean
  label?: string
  name?: string
  onClick?(): void
  value?: string
  shape?: Shape
}

const RadioComponent: FC<Props> = ({
  label,
  checked,
  color = Color.primary,
  shape = Shape.round,
  ...checkboxProps
}) => {
  const classNames = cx.generate({
    ccn: BASE_CLASS_NAME,
    data: [color, shape]
  })

  return (
    <RadioWrapper data-component="Checkbox">
      <RadioText>{label}</RadioText>
      <Radio {...checkboxProps} type="radio" checked={checked} />
      <RadioChild className={cx.join(classNames, 'checkmark')} />
    </RadioWrapper>
  )
}

export default RadioComponent
