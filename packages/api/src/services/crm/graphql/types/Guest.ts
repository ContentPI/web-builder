import gql from 'graphql-tag'

export default gql`
  type Guest {
    googleContactId: UUID!
    fullName: String!
    email: String!
    photo: String!
    socialMedia: String!
    location: String!
    phone: String!
    gender: String!
    birthday: String
    organization: String!
    note: String!
    reservations: [Reservation!]
    freeNights: [FreeNight!]
    invoice: [Invoice!]
    createdAt: Datetime!
    updatedAt: Datetime!
  }

  type Query {
    getGuests: [Guest!]
    getGuestByGoogleContactId(googleContactId: String!): Guest!
  }

  type Mutation {
    importGuests(input: RefreshTokenInput): [Guest]!
  }

  input RefreshTokenInput {
    refreshToken: String!
  }
`
