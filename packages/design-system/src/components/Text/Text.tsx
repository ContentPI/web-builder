// Dependencies
import React, { FC } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Types
import { Color, Typography, TextAlign } from '../../types'

// Styles
import { Text, BASE_CLASS_NAME } from './Text.styled'

export interface TextProps {
  align?: TextAlign
  className?: string
  color?: Color
  component?: keyof JSX.IntrinsicElements
  variant?: Typography
}

const TextComponent: FC<TextProps> = ({
  align = TextAlign.left,
  children,
  className,
  component = undefined,
  ...restProps
}) => {
  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [align],
    className,
  })

  const cpmTag = component

  return (
    <Text as={cpmTag} className={classNames} {...restProps}>
      {children}
    </Text>
  )
}

export default TextComponent
