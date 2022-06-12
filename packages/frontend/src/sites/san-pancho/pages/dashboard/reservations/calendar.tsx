import { Button, Select, Switcher } from '@web-builder/design-system'
import moment, * as Moment from 'moment'
import { extendMoment } from 'moment-range'
import React, { FC, useEffect, useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

import ApolloConnector from '~/components/ApolloConnector'
import DashboardLayout from '~/components/Dashboard/Layout'
import query from './getReservationsAndGuests.query'

const Moments = extendMoment(Moment)

const Calendar: FC<any> = ({ reservations, guests }) => {
  console.log('RESERVATIONS===', reservations, guests)
  const [dates, setDates] = useState<any>([])
  const [open, setOpen] = useState(false)
  const [openCreateGuestModal, setOpenCreateGuestModal] = useState(false)
  const [openEditReservationModal, setOpenEditReservationModal] = useState(false)
  const [data, setData] = useState<any>({})
  const [reservationType, setReservationType] = useState('')
  const [filterdReservations, setFiltered] = useState([])
  const [timeLine, setTimeLine] = useState(false)

  const onClose = async (): Promise<void> => {
    setOpen(false)
    setOpenCreateGuestModal(false)
    setOpenEditReservationModal(false)
  }

  const openModal = () => {
    setOpen(true)
  }

  const openModalGuest = () => {
    setOpenCreateGuestModal(true)
  }

  useEffect(() => {
    setDates([])

    if (reservations) {
      const filterd = reservations.filter((r: any) => r.reservationType === reservationType)

      setFiltered(filterd)
      filterd.forEach((reservation: any) => {
        const start = moment(reservation.startDate)
        const end = moment(reservation.endDate)
        const range = Moments.range(start, end)
        const years = Array.from(range.by('day'))

        years.forEach((year: any) => {
          const date = new Date(year)
          let color = 'var(--palette-primary-common-dark)'

          if (reservation.pendingAmount > 0) {
            color = 'var(--palette-warning-common-main)'
          }

          if (reservation.canceled) {
            color = 'var(--palette-danger-common-main)'
          }

          setDates((d: any) => [
            ...d,
            {
              date: moment(date).format('yy-MM-DD'),
              title:
                guests && guests.find((guest: any) => guest.id === reservation.guestId).fullName,
              color
            }
          ])
        })
      })
    }
  }, [reservations, guests, reservationType])

  const handleCalendarClick = (args: any) => {
    const selectedDay = dates.find((date: any) => date.date === args.dateStr)

    // If is a new day, we open Create Reservation modal
    if (!selectedDay) {
      setData({ selectedDay: args.dateStr })

      return openModal()
    }

    const selectedGuest = guests.find((guest: any) => guest.fullName === selectedDay.title)
    const selectedReservations = reservations.filter(
      (reservation: any) => reservation.guestId === selectedGuest.id
    )

    const selectedReservation = selectedReservations.find((reservation: any) => {
      const selectedDate = args.dateStr
      const startDate = reservation.startDate.split('T')[0]
      const endDate = reservation.endDate.split('T')[0]

      const isSameDate = selectedDate === startDate || selectedDate === endDate
      const isBetween = moment(selectedDate).isBetween(startDate, endDate)

      return isSameDate || isBetween
    })

    setData({
      dates,
      guests,
      selectedDay: args.dateStr,
      selectedReservation
    })

    setOpenEditReservationModal(true)
  }

  return (
    <DashboardLayout>
      <>
        <h1>
          Reservaciones: {reservationType === 'stone' && 'Cabaña de piedra'}{' '}
          {reservationType === 'big-house' && 'Cabaña Grande'}{' '}
          {reservationType === 'camping' && 'Area de camping'}
        </h1>
        <Button onClick={openModal}>Crear Reservación</Button>{' '}
        <Button onClick={openModalGuest}>Crear nuevo Huésped</Button>
        <br />
        <Switcher
          type="round"
          label="Ver linea del tiempo"
          checked={timeLine}
          onChange={() => setTimeLine(!timeLine)}
        />
      </>
    </DashboardLayout>
  )
}

const onSuccess: FC<any> = (data: any) => (
  <Calendar reservations={data.getReservations} guests={data.getGuests} />
)

const Connector: FC = () => <ApolloConnector query={query} onSuccess={onSuccess} />

export default Connector
