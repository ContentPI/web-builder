import { gql } from '@apollo/client'

export default gql`
  query getExpenses {
    getExpenses {
      id
      amount
      concept
      date
    }
  }
`
