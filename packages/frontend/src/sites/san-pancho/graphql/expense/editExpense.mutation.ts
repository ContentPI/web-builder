import { gql } from '@apollo/client'

export default gql`
  mutation editExpense($id: UUID!, $amount: Int!, $concept: String!, $date: Datetime!) {
    editExpense(id: $id, input: { amount: $amount, concept: $concept, date: $date }) {
      id
    }
  }
`
