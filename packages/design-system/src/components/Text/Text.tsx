import { cxGenerator } from '@contentpi/lib'
import React, { FC } from 'react'

import { Color, TextAlign, Typography } from '../../types'
import { BASE_CLASS_NAME, Text } from './Text.styled'

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
    className
  })

  const cpmTag = component

  return (
    <Text as={cpmTag} className={classNames} {...restProps}>
      {children}
    </Text>
  )
}

export default TextComponent
