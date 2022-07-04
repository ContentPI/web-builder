import { gql } from '@apollo/client'

export default gql`
  query getGuestById($id: String!) {
    getGuestbyId(id: $id) {
      id
      googleContactId
      fullName
      email
      photo
      socialMedia
      location
      gender
      birthday
      organization
      note
      reservations {
        id
        nights
        endDate
        startDate
        reservationCost
        reservationType
      }
      freeNights {
        id
        isUsed
        cabin
        dateOfUse
      }
    }
  }
`
