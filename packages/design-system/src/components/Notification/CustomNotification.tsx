import React, { FC, ReactNode } from 'react'
import { AppearanceTypes } from 'react-toast-notifications'
import styled from 'styled-components'

type Props = {
  appearance: AppearanceTypes
  children: ReactNode
  onDismiss: (id?: string) => void
}

const StyledNotification = styled.div`
  background-position: 15px;
  background-repeat: no-repeat;
  border-radius: 3px 3px 3px 3px;
  box-shadow: 0 0 12px #fff;
  color: #fff;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin: 0 0 6px;
  margin-bottom: 15px;
  max-height: 100px;
  opacity: 1;
  cursor: pointer;
  overflow: hidden;
  padding: 30px;
  pointer-events: auto;
  position: relative;
  transition: 0.3s ease;
  width: 300px;

  &.error {
    background-color: #f44237;
  }

  &.success {
    background-color: #4baf4f;
  }

  &.warning {
    background-color: #ff9800;
  }

  &.info {
    background-color: #00bde5;
  }
`

const StyledClose = styled.div`
  margin-left: 5px;
  align-self: flex-start;

  img {
    width: 10px;
    opacity: 0.3;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
`

const StyledIcon = styled.div`
  margin-right: 10px;
  margin-left: -15px;
  line-height: 0px;

  img {
    width: 30px;
    height: 30px;
  }
`

const CustomNotification: FC<Props> = ({ appearance, children, onDismiss }) => (
  <StyledNotification className={`notification ${appearance}`}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <StyledIcon>
        <img
          onClick={() => onDismiss()}
          alt="Close"
          src={require(`../../icons/${appearance}.svg`)}
        />
      </StyledIcon>

      {children}
    </div>
    <StyledClose>
      <img onClick={() => onDismiss()} alt="Close" src={require('../../icons/close.svg')} />
    </StyledClose>
  </StyledNotification>
)

export default CustomNotification
