import gql from 'graphql-tag'

export default gql`
  "User type"
  type User {
    "ID"
    id: UUID!
    "The user's username"
    username: String!
    "Unique email"
    email: String!
    "Role"
    role: String!
    "The user needs to activate the account"
    active: Boolean!
    "Created date"
    createdAt: Datetime!
    "Last update date"
    updatedAt: Datetime!
    "Helps to debug user"
    _DEBUG: JSON
  }

  "Token type"
  type Token {
    "Access Token for valid user"
    token: String!
  }

  "User Query"
  type Query {
    "Get a specific user by passing an access token"
    getUser(at: String!): User!
    "Gets all users"
    getUsers: [User!]
  }

  "User Mutation"
  type Mutation {
    "Creates a new user"
    createUser(input: ICreateUser): User!
    "Login mutation (returns a token)"
    login(input: ILogin): Token!
  }

  "CreateUser Input"
  input ICreateUser {
    "Username"
    username: String!
    "Encrypted password"
    password: String!
    "Email"
    email: String!
    "Account status"
    active: Boolean!
    "Role for the user"
    role: String!
  }

  "Login Input"
  input ILogin {
    "Email for authentication"
    emailOrUsername: String!
    "Password for authentication"
    password: String!
  }
`
