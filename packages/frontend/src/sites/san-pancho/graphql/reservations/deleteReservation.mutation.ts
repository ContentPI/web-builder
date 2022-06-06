import { gql } from '@apollo/client'

export default gql`
  mutation deleteReservation($id: UUID!) {
    deleteReservation(id: $id) {
      id
    }
  }
`
