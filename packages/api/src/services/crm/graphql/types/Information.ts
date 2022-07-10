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
    createInformation(input: InformationInput): Information!
    editInformation(id: UUID!, input: InformationInput): Information!
  }

  input InformationInput {
    title: String!
    body: JSON!
    cabin: String!
  }
`
