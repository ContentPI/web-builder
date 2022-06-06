import { gql } from '@apollo/client'

export default gql`
  mutation editGuest(
    $id: UUID!
    $googleContactId: String!
    $fullName: String!
    $email: String!
    $photo: String!
    $socialMedia: String!
    $location: String!
    $gender: String!
    $birthday: String
    $organization: String!
    $note: String!
  ) {
    editGuest(
      id: $id
      input: {
        googleContactId: $googleContactId
        fullName: $fullName
        email: $email
        photo: $photo
        socialMedia: $socialMedia
        location: $location
        gender: $gender
        birthday: $birthday
        organization: $organization
        note: $note
      }
    ) {
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
    }
  }
`
