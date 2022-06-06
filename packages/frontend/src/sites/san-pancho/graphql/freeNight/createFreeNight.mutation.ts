import { gql } from '@apollo/client'

export default gql`
  mutation createFreeNight(
    $userId: UUID!
    $isUsed: Boolean!
    $dateOfUse: Datetime
    $cabin: String!
  ) {
    createFreeNight(
      input: { userId: $userId, isUsed: $isUsed, dateOfUse: $dateOfUse, cabin: $cabin }
    ) {
      id
    }
  }
`
