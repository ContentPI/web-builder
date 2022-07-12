import { gql } from '@apollo/client'

export default gql`
  query getGuestByGoogleContactId($googleContactId: String!) {
    getGuestByGoogleContactId(googleContactId: $googleContactId) {
      googleContactId
      fullName
      email
      phone
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
