import { gql } from '@apollo/client'

export default gql`
  mutation editReservation(
    $id: UUID!
    $canceled: Boolean!
    $deposit: Boolean!
    $endDate: Datetime!
    $freeNights: Int!
    $guestId: UUID!
    $guests: Int!
    $needCrib: Boolean!
    $nights: Int!
    $pendingAmount: Int!
    $reservationCost: Int!
    $startDate: Datetime!
    $note: String
    $type: String!
  ) {
    editReservation(
      id: $id
      input: {
        canceled: $canceled
        deposit: $deposit
        endDate: $endDate
        freeNights: $freeNights
        guestId: $guestId
        guests: $guests
        needCrib: $needCrib
        nights: $nights
        pendingAmount: $pendingAmount
        reservationCost: $reservationCost
        startDate: $startDate
        note: $note
        reservationType: $type
      }
    ) {
      canceled
      deposit
      endDate
      freeNights
      guestId
      guests
      needCrib
      nights
      pendingAmount
      reservationCost
      startDate
      note
    }
  }
`
