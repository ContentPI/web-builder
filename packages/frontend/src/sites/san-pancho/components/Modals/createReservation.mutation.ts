import { gql } from '@apollo/client'

export default gql`
  mutation createReservation(
    $googleContactId: UUID!
    $startDate: Datetime!
    $endDate: Datetime!
    $nights: Int!
    $freeNights: Int!
    $guests: Int!
    $pendingAmount: Int!
    $reservationCost: Int!
    $deposit: Boolean!
    $needCrib: Boolean!
    $canceled: Boolean!
    $note: String
    $type: String!
  ) {
    createReservation(
      input: {
        googleContactId: $googleContactId
        startDate: $startDate
        endDate: $endDate
        nights: $nights
        freeNights: $freeNights
        guests: $guests
        pendingAmount: $pendingAmount
        reservationCost: $reservationCost
        deposit: $deposit
        needCrib: $needCrib
        canceled: $canceled
        note: $note
        reservationType: $type
      }
    ) {
      googleContactId
      startDate
      endDate
      nights
      freeNights
      guests
      pendingAmount
      reservationCost
      deposit
      needCrib
      canceled
      note
    }
  }
`
