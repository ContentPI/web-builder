import { gql } from '@apollo/client'

import { getGuestsQuery } from '../guests/getGuests.query'

export const getReservationsQuery = `
  getReservations {
    id
    startDate
    endDate
    guestId
    nights
    guests
    freeNights
    needCrib
    pendingAmount
    reservationCost
    deposit
    reservationCost
    canceled
    note
    reservationType
  }
`

export default gql`
  query getReservationsAndGuests {
    ${getReservationsQuery}
    ${getGuestsQuery}
  }
`
