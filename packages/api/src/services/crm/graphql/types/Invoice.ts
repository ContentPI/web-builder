import gql from 'graphql-tag'

export default gql`
  type Invoice {
    id: UUID!
    guestId: UUID!
    invoiceName: String!
    issuerName: String!
    invoiceNumber: String!
    invoiceAdress: String!
    issuerAdress: String!
    issuerEmail: String!
    apliedIVA: Int!
    invoiceEmail: String!
    createdAt: Datetime!
    updatedAt: Datetime!
    invoiceElements: [InvoiceElement!]
  }

  type Query {
    getInvoices: [Invoice!]
    getInvoiceById(id: UUID!): [Invoice!]
    getInvoiceByGuest(guestId: UUID!): [Invoice!]
  }

  type Mutation {
    createInvoice(input: CreateInvoiceInput): Invoice!
    editInvoice(id: UUID!, input: CreateInvoiceInput): Invoice!
  }

  input CreateInvoiceInput {
    guestId: UUID!
    invoiceName: String!
    issuerName: String!
    invoiceNumber: String!
    invoiceAdress: String!
    issuerAdress: String!
    issuerEmail: String!
    apliedIVA: Int!
    invoiceEmail: String!
  }
`
