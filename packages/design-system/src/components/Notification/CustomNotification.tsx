import React, { FC, ReactNode } from 'react'
import { AppearanceTypes } from 'react-toast-notifications'

import { CSS } from './CustomNotification.styled'

type Props = {
  appearance: AppearanceTypes
  children: ReactNode
  onDismiss: (id?: string) => void
}

const CustomNotification: FC<Props> = ({ appearance, children, onDismiss }) => (
  <CSS.Notification className={`notification ${appearance}`}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <CSS.Icon>
        <img
          onClick={() => onDismiss()}
          alt="Close"
          src={require(`../../icons/${appearance}.svg`)}
        />
      </CSS.Icon>

      {children}
    </div>
    <CSS.Close>
      <img onClick={() => onDismiss()} alt="Close" src={require('../../icons/close.svg')} />
    </CSS.Close>
  </CSS.Notification>
)

export default CustomNotification
