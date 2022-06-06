import { gql } from '@apollo/client'

export default gql`
  query getReservationsById($id: UUID!) {
    getReservationById(id: $id) {
      id
      startDate
      endDate
      guestId
      nightss
      guests
      freeNights
      needCrib
      pendingAmount
      deposit
      reservationCost
      canceled
      note
      reservationType
    }
  }
`
