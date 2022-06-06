import { gql } from '@apollo/client'

export default gql`
  query getInvoiceByGuest($guestId: UUID!) {
    getInvoiceByGuest(guestId: $guestId) {
      id
      invoiceName
      invoiceNumber
      issuerAdress
      issuerName
      issuerEmail
      invoiceAdress
      invoiceEmail
      createdAt
      invoiceElements {
        description
        amount
        quantity
        unitaryPrice
      }
    }
  }
`
