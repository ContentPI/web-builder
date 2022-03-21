// Dependencies
import React, { FC, ComponentPropsWithoutRef, useState } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Styles
import { TextArea, TextAreaWrapper, BASE_CLASS_NAME } from './TextArea.styled'

export interface IProps extends ComponentPropsWithoutRef<'textarea'> {
  fullWidth?: boolean
}

const TextAreaComponent: FC<IProps> = props => {
  const { fullWidth = false, ...restProps } = props

  const [hasFocus, setHasFocus] = useState(false)

  const focusClass = hasFocus ? 'focus' : ''
  const fullWidthClass = fullWidth ? 'full-width' : ''

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [focusClass, fullWidthClass],
  })

  return (
    <TextAreaWrapper className={classNames}>
      <TextArea
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        {...restProps}
      />
    </TextAreaWrapper>
  )
}

export default TextAreaComponent
