// Dependencies
import React, { FC, useEffect } from 'react'
import { ToastProvider, useToasts, AppearanceTypes, Placement } from 'react-toast-notifications'

// Custom Notification
import CustomNotification from './CustomNotification'

// Hooks
import usePrevious from '../../usePrevious'

type Props = {
  notification: {
    id: number
    message: string
  }
  type: AppearanceTypes
  position?: Placement
  duration?: number
  maxNotifications?: number
}

const NotificationWrapper: FC<Props> = ({ notification, type, maxNotifications = 5 }) => {
  const { addToast } = useToasts()
  const prevProps: any = usePrevious({ notification })
  const notifications = document.querySelectorAll('.notification') || []

  useEffect(() => {
    if (
      !prevProps ||
      (prevProps &&
        prevProps.notification.id !== notification.id &&
        notifications.length < maxNotifications)
    ) {
      addToast(notification.message, { appearance: type })
    }
  }, [notification, prevProps])

  return null
}

const Notification: FC<Props> = ({
  notification,
  type,
  position = 'top-right',
  duration = 0,
  maxNotifications,
}) => (
  <ToastProvider
    components={{ Toast: CustomNotification }}
    autoDismiss={duration > 0}
    placement={position}
    autoDismissTimeout={duration < 999 ? duration * 1000 : duration}
  >
    <NotificationWrapper
      notification={notification}
      type={type}
      maxNotifications={maxNotifications}
    />
  </ToastProvider>
)

export default Notification
