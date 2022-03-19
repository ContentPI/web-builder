import React, { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import { ButtonVariant, Color, Shape, Size, Variant } from '../../types'
import Spinner from '../Spinner'
import { BASE_CLASS_NAME, Button, LinkButton } from './Button.styled'

interface Props {
  ccn: string
  data: string[]
  className?: string
}

export function cxGenerator({ ccn, data, className }: Props): string {
  const classList = [ccn]

  data.forEach(key => {
    if (key !== '') {
      classList.push(`${ccn}-${key}`)
    }
  })

  if (className) {
    classList.push(className)
  }

  return classList.join(' ')
}

interface IProps extends ComponentPropsWithoutRef<'button'> {
  color?: Color
  fullWidth?: boolean
  size?: Size
  variant?: ButtonVariant
  href?: string
  shape?: Shape
  disabled?: boolean
  isLoading?: boolean
  loadingText?: string
}

const ButtonComponent: FC<IProps> = ({
  color = Color.primary,
  children,
  href = undefined,
  disabled = undefined,
  isLoading = undefined,
  loadingText = undefined,
  shape = Shape.regular,
  size = Size.medium,
  variant = Variant.contained,
  fullWidth = false,
  ...btnProps
}) => {
  let buttonText: ReactNode[] | ReactNode | string = children
  const fullWidthClass = fullWidth ? 'full-width' : ''
  const classes = [variant, size, shape, fullWidthClass, color]

  if (isLoading || disabled) {
    classes.push('disabled')
  }

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: classes
  })

  if (isLoading) {
    buttonText = (
      <>
        <Spinner style={{ width: '18px' }} /> &nbsp;&nbsp;&nbsp; {loadingText}
      </>
    )
  }

  if (href) {
    const linkBtnProps: any = {
      href
    }

    return (
      <LinkButton
        data-component="LinkButton"
        className={classNames}
        {...linkBtnProps}
        disabled={isLoading || disabled}
      >
        <a {...linkBtnProps}>{buttonText}</a>
      </LinkButton>
    )
  }

  return (
    <Button
      data-component="Button"
      className={classNames}
      {...btnProps}
      disabled={isLoading || disabled}
    >
      {buttonText}
    </Button>
  )
}

export default ButtonComponent
