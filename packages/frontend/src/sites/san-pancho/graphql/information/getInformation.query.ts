import { gql } from '@apollo/client'

export default gql`
  query getInformation {
    getInformation {
      title
      body
      updatedAt
      id
    }
  }
`
