// Dependencies
import React, { FC, ReactElement } from 'react'

// Styles
import { GlobalStyle, Dialog, Img, Content, Container, Close } from './Dialog.styled'

// Interfaces
interface iProps {
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

const DialogComponent: FC<iProps> = ({
  children,
  open,
  onOpen,
  handleClose,
  title,
  options = {},
}) => {
  let width = '500px'
  let height = ''
  const margin = `${options.position === 'top' ? '0.5%' : '14%'} auto`

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

  return (
    <>
      <GlobalStyle />

      <Dialog className="Modal">
        <Container maxWidth={width} height={height} margin={margin}>
          <Close onClick={handleClose}>
            <Img alt="Close" src={require('./icons/close.svg')} />
          </Close>

          <Content style={{ maxHeight: height !== '100%' ? height : '500px' }}>
            {title && <h2 className="label">{title}</h2>}
            {children}
          </Content>
        </Container>
      </Dialog>
    </>
  )
}

export default DialogComponent
