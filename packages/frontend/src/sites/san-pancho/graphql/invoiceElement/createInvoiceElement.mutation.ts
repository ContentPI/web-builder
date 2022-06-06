import { gql } from '@apollo/client'

export default gql`
  mutation createInvoiceElement(
    $invoiceId: UUID!
    $description: String!
    $amount: Int!
    $unitaryPrice: Int!
    $quantity: Int!
  ) {
    createInvoiceElement(
      input: {
        invoiceId: $invoiceId
        description: $description
        amount: $amount
        unitaryPrice: $unitaryPrice
        quantity: $quantity
      }
    ) {
      invoiceId
    }
  }
`
