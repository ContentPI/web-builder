import { gql } from '@apollo/client'

export default gql`
  query getGuestByEmail($email: String!) {
    getGuestbyEmail(email: $email) {
      id
      email
      reservations {
        id
        nights
      }
      freenights {
        id
        isUsed
        dateOfUse
      }
    }
  }
`
