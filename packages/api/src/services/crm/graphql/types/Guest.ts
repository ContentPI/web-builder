import gql from 'graphql-tag'

export default gql`
  type Guest {
    googleContactId: UUID!
    fullName: String!
    email: String!
    photo: String!
    socialMedia: String!
    location: String!
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
    getGuestByEmail(email: String!): Guest!
    getGuestByGoogleContactId(googleContactId: String!): Guest!
  }

  type Mutation {
    importGuests(input: RefreshTokenInput): [Guest]!
  }

  input RefreshTokenInput {
    refreshToken: String!
  }

  input CreateGuestInput {
    googleContactId: UUID!
    fullName: String!
    email: String!
    photo: String!
    socialMedia: String!
    location: String!
    gender: String!
    birthday: String
    organization: String!
    note: String!
  }
`
