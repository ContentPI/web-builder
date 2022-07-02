import React, { FC, ReactElement } from 'react'
import { createPortal } from 'react-dom'

import { CSS, GlobalStyle } from './Dialog.styled'

type Props = {
  open: boolean
  onOpen?(): void
  handleClose?(): void
  title?: string
  children: ReactElement | ReactElement[]
  options?: {
    position?: 'top' | 'center'
    height?: string
    width?: string
  }
}

const DialogComponent: FC<Props> = ({
  children,
  open,
  onOpen,
  handleClose,
  title,
  options = {}
}) => {
  let width = '500px'
  let height = ''

  if (!open) {
    return null
  }

  if (onOpen) {
    onOpen()
  }

  if (options.width) {
    width = options.width
  }

  if (options.height) {
    height = options.height
  }

  return createPortal(
    <>
      <GlobalStyle />

      <CSS.Dialog className="Modal">
        <CSS.Container maxWidth={width} height={height}>
          <CSS.Close onClick={handleClose}>
            <CSS.Img alt="Close" src={require('./icons/close.svg')} />
          </CSS.Close>

          <CSS.Content style={{ maxHeight: height !== '100%' ? height : '500px' }}>
            {title && <h2 className="label">{title}</h2>}
            {children}
          </CSS.Content>
        </CSS.Container>
      </CSS.Dialog>
    </>,
    document.body
  )
}

export default DialogComponent
