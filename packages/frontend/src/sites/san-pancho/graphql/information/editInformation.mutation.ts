import { gql } from '@apollo/client'

export default gql`
  mutation editInformation($id: UUID!, $title: String!, $body: JSON!, $cabin: String!) {
    editInformation(id: $id, input: { title: $title, body: $body, cabin: $cabin }) {
      title
      body
      updatedAt
    }
  }
`
