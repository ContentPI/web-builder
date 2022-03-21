// Dependencies
import React, { FC, ComponentPropsWithoutRef, useState, ElementType } from 'react'
import { cxGenerator } from '@contentpi/lib'

import Icon from '../Icon'

// Types
import { Color } from '../../types'

// Styles
import { InputWrapper, InputBase, BASE_CLASS_NAME, InputIcon } from './Input.styled'

export interface IProps extends ComponentPropsWithoutRef<'input'> {
  fullWidth?: boolean
  leftIcon?: ElementType
  rightIcon?: ElementType
  status?: Color
}

const Input: FC<IProps> = ({
  status = '',
  type = 'text',
  leftIcon,
  rightIcon,
  fullWidth = false,
  value = '',
  ...restProps
}) => {
  const [hasFocus, setHasFocus] = useState(false)
  const [showValue, setShowValue] = useState(false)

  const isPassword = type === 'password'
  const inputType = showValue ? 'text' : type
  const focusClass = hasFocus ? 'focus' : ''
  const fullWidthClass = fullWidth ? 'full-width' : ''

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [status, focusClass, fullWidthClass],
  })

  const handleShowPassword = () => {
    setShowValue(prev => !prev)
  }

  const iconProps = {
    size: 20,
    color: 'red',
  }

  const eye = () => <Icon library="feather" type="eye" width={20} />
  const eyeOff = () => <Icon library="feather" type="eye-off" width={20} />

  const LeftIcon = leftIcon
  const RightIcon = (isPassword && (showValue ? eye : eyeOff)) || rightIcon

  return (
    <InputWrapper className={classNames}>
      {LeftIcon && (
        <InputIcon className="icon-left">
          <LeftIcon {...iconProps} />
        </InputIcon>
      )}
      <InputBase
        type={inputType}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        value={value || ''}
        {...restProps}
      />
      {RightIcon &&
        (isPassword ? (
          <InputIcon className="icon-right pointer" as="button" onClick={handleShowPassword}>
            <RightIcon {...iconProps} />
          </InputIcon>
        ) : (
          <InputIcon className="icon-right">
            <RightIcon {...iconProps} />
          </InputIcon>
        ))}
    </InputWrapper>
  )
}

export default Input
