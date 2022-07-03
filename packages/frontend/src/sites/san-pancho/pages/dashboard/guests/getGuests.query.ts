import { gql } from '@apollo/client'

export const getGuestsQuery = `
  getGuests {
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
`

export default gql`
  query getGuests {
    ${getGuestsQuery}
  }
`
