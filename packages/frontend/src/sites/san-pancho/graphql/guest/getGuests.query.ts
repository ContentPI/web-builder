import { gql } from '@apollo/client'

export default gql`
  query getGuests {
    getGuests {
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
        nights
      }
      freeNights {
        id
        isUsed
        dateOfUse
      }
    }
  }
`
