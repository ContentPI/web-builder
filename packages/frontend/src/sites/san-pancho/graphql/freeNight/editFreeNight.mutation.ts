import { gql } from '@apollo/client'

export default gql`
  mutation editInformation($id: UUID!, $userId: UUID!, $isUsed: Boolean!, $dateOfUse: Datetime) {
    editInformation(id: $id, input: { userId: $userId, isUsed: $isUsed, dateOfUse: $dateOfUse }) {
      id
      userId
      dateOfUse
    }
  }
`
