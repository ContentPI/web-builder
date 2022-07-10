export default {
  Query: {
    getExpenses: (_: any, _args: any, { models }: { models: any }) => models.Expense.findAll({}),
    getExpensesById: async (
      _: any,
      { id }: { id: string },
      { models }: { models: any }
    ): Promise<any> => {
      const data = await models.Expense.findAll({
        where: {
          id
        }
      })

      return data[0]
    }
  },
  Mutation: {
    createExpense: async (
      _: any,
      { input }: { input: any },
      { models }: { models: any }
    ): Promise<any> => {
      const createdExpense = await models.Expense.create({ ...input })
      return createdExpense
    },
    editExpense: async (
      _: any,
      { id, input }: { id: string; input: any },
      { models }: { models: any }
    ): Promise<any> => {
      const expenseToEdit = await models.Expense.findByPk(id)

      if (expenseToEdit) {
        const updatedExpense = await expenseToEdit.update({ ...input }, { where: { id } })

        return updatedExpense
      }

      return null
    }
  }
}
