import gql from 'graphql-tag'

export default gql`
  type Reservation {
    id: UUID!
    googleContactId: UUID!
    startDate: Datetime!
    endDate: Datetime!
    nights: Int!
    freeNights: Int!
    guests: Int!
    pendingAmount: Int!
    reservationCost: Int!
    deposit: Boolean!
    needCrib: Boolean!
    canceled: Boolean!
    note: String
    reservationType: String!
    createdAt: Datetime!
    updatedAt: Datetime!
  }

  type Query {
    getReservations: [Reservation!]
    getReservationById(id: UUID!): [Reservation!]
  }

  type Mutation {
    createReservation(input: ReservationInput): Reservation!
    deleteReservation(id: UUID!): Reservation!
    editReservation(id: UUID!, input: ReservationInput): Reservation!
  }

  input ReservationInput {
    googleContactId: UUID!
    startDate: Datetime!
    endDate: Datetime!
    nights: Int!
    freeNights: Int!
    guests: Int!
    pendingAmount: Int!
    reservationCost: Int!
    deposit: Boolean!
    needCrib: Boolean!
    canceled: Boolean!
    note: String
    reservationType: String!
  }
`
