import { gql } from '@apollo/client'

export default gql`
  mutation createInvoice(
    $guestId: UUID!
    $invoiceName: String!
    $invoiceEmail: String!
    $invoiceNumber: String!
    $invoiceAdress: String!
    $issuerName: String!
    $issuerEmail: String!
    $issuerAdress: String!
    $apliedIVA: Int!
  ) {
    createInvoice(
      input: {
        guestId: $guestId
        invoiceName: $invoiceName
        invoiceEmail: $invoiceEmail
        invoiceNumber: $invoiceNumber
        invoiceAdress: $invoiceAdress
        issuerName: $issuerName
        issuerEmail: $issuerEmail
        issuerAdress: $issuerAdress
        apliedIVA: $apliedIVA
      }
    ) {
      guestId
      id
    }
  }
`
