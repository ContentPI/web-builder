import gql from 'graphql-tag'

export default gql`
  type Enumeration {
    id: UUID!
    enumerationName: String!
    identifier: String!
    description: String!
    values: String
    createdAt: Datetime!
    updatedAt: Datetime!
    appId: UUID!
  }

  type Query {
    getEnumerationsByAppId(appId: UUID!): [Enumeration!]
  }

  type Mutation {
    createEnumeration(input: EnumerationInput): Enumeration!
    deleteEnumeration(id: UUID!): Enumeration!
    editEnumeration(id: UUID!, input: EnumerationInput): Enumeration!
  }

  input EnumerationInput {
    enumerationName: String!
    identifier: String!
    description: String!
    values: String!
    appId: UUID!
  }
`
