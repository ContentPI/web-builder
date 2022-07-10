import gql from 'graphql-tag'

export default gql`
  type Post {
    id: UUID!
    author: String!
    poster: String!
    category: String!
    title: String!
    slug: String!
    content: String!
    codes: String!
    createdAt: Datetime!
    updatedAt: Datetime!
  }

  type Query {
    getPosts: [Post!]
    getPostBySlug: [Expense!]
  }

  type Mutation {
    createPost(input: PostInput): Post!
    editPost(id: UUID!, input: PostInput): Post!
  }

  input PostInput {
    author: String!
    poster: String!
    category: String!
    title: String!
    slug: String!
    content: String!
    codes: String!
  }
`
