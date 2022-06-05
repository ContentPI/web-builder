import gql from 'graphql-tag'

export default gql`
  type Guest {
    id: UUID!
    googleContactId: String!
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
    getGuestbyId(id: String!): Guest!
    getGuestbyEmail(email: String!): Guest!
  }

  type Mutation {
    createGuest(input: CreateGuestInput): Guest!
    editGuest(id: UUID!, input: CreateGuestInput): Guest!
  }

  input CreateGuestInput {
    googleContactId: String!
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
