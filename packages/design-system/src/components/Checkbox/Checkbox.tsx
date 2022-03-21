import { cx, cxGenerator } from '@contentpi/lib'
import React, { ComponentPropsWithoutRef, FC, MouseEvent } from 'react'

import { Color, Shape } from '../../types'
import {
  BASE_CLASS_NAME,
  Checkbox,
  CheckboxChild,
  CheckboxText,
  CheckboxWrapper
} from './Checkbox.styled'

interface IProps extends ComponentPropsWithoutRef<'input'> {
  color?: Color
  checked?: boolean
  label?: string
  name?: string
  onClick?: (e: MouseEvent<HTMLElement>) => void
  value?: string
  shape?: Shape
}

const CheckboxComponent: FC<IProps> = ({
  label,
  checked,
  color = Color.primary,
  shape = Shape.regular,
  ...checkboxProps
}) => {
  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [color, shape]
  })

  return (
    <CheckboxWrapper data-component="Checkbox">
      <>
        <CheckboxText>{label}</CheckboxText>
        <Checkbox {...checkboxProps} type="checkbox" checked={checked} />
        <CheckboxChild className={cx(classNames, 'checkmark')} />
      </>
    </CheckboxWrapper>
  )
}

export default CheckboxComponent
