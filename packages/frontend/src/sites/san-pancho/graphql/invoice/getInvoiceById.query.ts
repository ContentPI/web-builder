import { gql } from '@apollo/client'

export default gql`
  query getInvoiceById($id: UUID!) {
    getInvoiceById(id: $id) {
      id
      invoiceName
      invoiceNumber
      issuerAdress
      issuerName
      issuerEmail
      invoiceAdress
      invoiceEmail
      invoiceElements {
        description
        amount
        quantity
        unitaryPrice
      }
    }
  }
`
