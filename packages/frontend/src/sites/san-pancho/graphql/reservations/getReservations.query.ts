import { gql } from '@apollo/client'

export default gql`
  query getReservations {
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
  }
`
