import gql from 'graphql-tag'

export default gql`
  type Information {
    id: UUID!
    title: String!
    body: JSON!
    cabin: String!
    createdAt: Datetime!
    updatedAt: Datetime!
  }

  type Query {
    getInformation: Information
  }

  type Mutation {
    createInformation(input: CreateInformationInput): Information!
    editInformation(id: UUID!, input: CreateInformationInput): Information!
  }

  input CreateInformationInput {
    title: String!
    body: JSON!
    cabin: String!
  }
`
