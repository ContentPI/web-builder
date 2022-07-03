import { gql } from '@apollo/client'

export default gql`
  mutation importGuests($refreshToken: String!) {
    importGuests(input: { refreshToken: $refreshToken }) {
      id
    }
  }
`
