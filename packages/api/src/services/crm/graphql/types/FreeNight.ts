import gql from 'graphql-tag'

export default gql`
  type FreeNight {
    id: UUID!
    userId: UUID!
    isUsed: Boolean!
    cabin: String!
    dateOfUse: Datetime
    createdAt: Datetime!
    updatedAt: Datetime!
  }

  type Query {
    getFreeNights: [FreeNight!]
    getFreeNightsById: [FreeNight!]
  }

  type Mutation {
    createFreeNight(input: CreateFreeNightInput): FreeNight!
    editFreeNight(id: UUID!, input: CreateFreeNightInput): FreeNight!
  }

  input CreateFreeNightInput {
    userId: UUID!
    isUsed: Boolean!
    dateOfUse: Datetime
    cabin: String!
  }
`
