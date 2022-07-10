import gql from 'graphql-tag'

export default gql`
  type App {
    id: UUID!
    userId: UUID!
    appName: String!
    identifier: String!
    icon: String!
    description: String!
    createdAt: Datetime!
    updatedAt: Datetime!
    models: [Model!]
    enumerations: [Enumeration!]
  }

  type Query {
    getApps: [App!]
    getAppById(id: String!): App!
  }

  type Mutation {
    createApp(input: AppInput): App!
  }

  input AppInput {
    appName: String!
    identifier: String!
    icon: String!
    description: String!
    userId: UUID!
  }
`
