import { gql } from '@apollo/client'

export default gql`
  mutation createExpense($amount: Int!, $concept: String!, $date: Datetime!) {
    createExpense(input: { amount: $amount, concept: $concept, date: $date }) {
      id
    }
  }
`
