import { Button, Calendar } from '@web-builder/design-system'
import { useI18n } from '@web-builder/i18n'
import { is } from '@web-builder/utils'
import React, { FC, useEffect, useState } from 'react'

import ApolloConnector from '~/components/ApolloConnector'
import DashboardLayout from '~/components/Dashboard/Layout'
import CreateReservationModal from '../../../components/Modals/CreateReservationModal'
import GET_RESERVATIONS_AND_GUESTS_QUERY from './getReservationsAndGuests.query'

const Reservations: FC<any> = ({ data }) => {
  const { getReservations: reservations, getGuests: guests } = data

  const [reservationType, setReservationType] = useState('stone')
  const [events, setEvents] = useState<any>([])
  const [openCreateReservationModal, setOpenCreateReservationModal] = useState(false)
  const [selectedDate, setSelectedDate] = useState('')

  const { t } = useI18n()

  const handleCreateReservationModal = () => {
    setOpenCreateReservationModal(true)
  }

  const onClose = () => {
    setOpenCreateReservationModal(false)
  }

  const handleDateClick = (date: any) => {
    if (is.String(date)) {
      setSelectedDate(date)
      setOpenCreateReservationModal(true)
    }
  }

  useEffect(() => {
    if (reservations) {
      const filteredReservations = reservations.filter(
        (r: any) => r.reservationType === reservationType
      )

      const newEvents: any = []

      filteredReservations.forEach((reservation: any) => {
        const {
          startDate,
          endDate,
          googleContactId,
          deposit,
          reservationCost,
          guests: guestCount,
          crib
        } = reservation
        const guestName =
          guests && guests.find((guest: any) => guest.googleContactId === googleContactId).fullName
        const hasDeposit = deposit ? '- DEP -' : '-'
        const cost = `$${reservationCost} - `
        const people = `${guestCount}A `
        const hasCrib = `${crib ? '- C ' : ''}`

        newEvents.push({
          startDate: startDate.split('T')[0],
          endDate: endDate.split('T')[0],
          title: `${guestName} ${hasDeposit} ${cost} ${people} ${hasCrib}`
        })
      })

      setEvents(newEvents)
    }
  }, [reservations, guests, reservationType])

  const renderHeader = (
    <>
      <h1>
        {t('reservations')}: {reservationType === 'stone' && t('stoneHouse')}{' '}
        {reservationType === 'lake-hose' && t('lakeViewHouse')}{' '}
        {reservationType === 'river-house' && t('riverViewHouse')}{' '}
        {reservationType === 'camping' && t('camping')}
      </h1>

      <p>
        <Button onClick={handleCreateReservationModal}>{t('createReservation')}</Button>
      </p>

      <CreateReservationModal
        isOpen={openCreateReservationModal}
        onClose={onClose}
        label={t('newReservation')}
        data={{ guests, events, selectedDate }}
        type={reservationType}
      />
    </>
  )

  if (events.length === 0) {
    return (
      <DashboardLayout>
        <>
          {renderHeader}
          <h3>{t('noReservations')}</h3>
        </>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <>
        {renderHeader}
        <Calendar t={t} events={events} dateClick={handleDateClick} />
      </>
    </DashboardLayout>
  )
}

const onSuccess: FC<any> = (props: any) => <Reservations {...props} />

const Connector: FC = () => (
  <ApolloConnector query={GET_RESERVATIONS_AND_GUESTS_QUERY} onSuccess={onSuccess} />
)

export default Connector
