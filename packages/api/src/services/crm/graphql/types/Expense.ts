import gql from 'graphql-tag'

export default gql`
  type Expense {
    id: UUID!
    amount: Int!
    concept: String!
    date: Datetime!
    createdAt: Datetime!
    updatedAt: Datetime!
  }

  type Query {
    getExpenses: [Expense!]
    getExpensesById: [Expense!]
  }

  type Mutation {
    createExpense(input: CreateExpenseInput): Expense!
    editExpense(id: UUID!, input: CreateExpenseInput): Expense!
  }

  input CreateExpenseInput {
    amount: Int!
    concept: String!
    date: Datetime!
  }
`
