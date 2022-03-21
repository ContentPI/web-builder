import { cx } from '@web-builder/utils'
import React, { ComponentPropsWithoutRef, FC, MouseEvent } from 'react'

import { Color, Shape } from '../../types'
import {
  BASE_CLASS_NAME,
  Checkbox,
  CheckboxChild,
  CheckboxText,
  CheckboxWrapper
} from './Checkbox.styled'

interface Props extends ComponentPropsWithoutRef<'input'> {
  color?: Color
  checked?: boolean
  label?: string
  name?: string
  onClick?: (e: MouseEvent<HTMLElement>) => void
  value?: string
  shape?: Shape
}

const CheckboxComponent: FC<Props> = ({
  label,
  checked,
  color = Color.primary,
  shape = Shape.regular,
  ...checkboxProps
}) => {
  const classNames = cx.generate({
    ccn: BASE_CLASS_NAME,
    data: [color, shape]
  })

  return (
    <CheckboxWrapper data-component="Checkbox">
      <CheckboxText>{label}</CheckboxText>
      <Checkbox {...checkboxProps} type="checkbox" checked={checked} />
      <CheckboxChild className={cx.join(classNames, 'checkmark')} />
    </CheckboxWrapper>
  )
}

export default CheckboxComponent
