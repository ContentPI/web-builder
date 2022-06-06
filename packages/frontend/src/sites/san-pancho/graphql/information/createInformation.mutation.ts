import { gql } from '@apollo/client'

export default gql`
  mutation createInformation($title: String!, $body: JSON!, $cabin: String!) {
    createInformation(input: { title: $title, body: $body, cabin: $cabin }) {
      title
      body
      updatedAt
    }
  }
`
