// Dependencies
import React, { FC, ReactElement } from 'react'

interface IProps {
  children: ReactElement | string
  isTrue: boolean
}

const RenderIf: FC<IProps> = ({ children, isTrue }) => {
  if (isTrue) {
    return <>{children}</>
  }

  return null
}

export default RenderIf
