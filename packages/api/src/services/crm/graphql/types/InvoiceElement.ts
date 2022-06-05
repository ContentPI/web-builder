import gql from 'graphql-tag'

export default gql`
  type InvoiceElement {
    id: UUID!
    invoiceId: UUID!
    description: String!
    quantity: Int!
    unitaryPrice: Int!
    amount: Int!
    createdAt: Datetime!
    updatedAt: Datetime!
  }

  type Query {
    getInvoiceElements: [InvoiceElement!]
    getInvoiceElementById(id: UUID!): [InvoiceElement!]
    getInvoiceElementByInvoice(invoiceId: UUID!): [InvoiceElement!]
  }

  type Mutation {
    createInvoiceElement(input: CreateInvoiceElementInput): InvoiceElement!
    editInvoiceElement(id: UUID!, input: CreateInvoiceElementInput): InvoiceElement!
  }

  input CreateInvoiceElementInput {
    invoiceId: UUID!
    description: String!
    quantity: Int!
    unitaryPrice: Int!
    amount: Int!
  }
`
