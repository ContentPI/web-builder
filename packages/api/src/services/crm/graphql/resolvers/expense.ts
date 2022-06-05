export default {
  Query: {
    getExpenses: (_: any, _args: any, { models }: { models: any }) => models.Expenses.findAll({}),
    getExpensesById: async (
      _: any,
      { id }: { id: string },
      { models }: { models: any }
    ): Promise<any> => {
      const data = await models.Expenses.findAll({
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
      const createdExpense = await models.Expenses.create({ ...input })
      return createdExpense
    },
    editExpense: async (
      _: any,
      { id, input }: { id: string; input: any },
      { models }: { models: any }
    ): Promise<any> => {
      const ExpenseToEdit = await models.Expenses.findByPk(id)

      if (ExpenseToEdit) {
        const updatedExpense = await ExpenseToEdit.update({ ...input }, { where: { id } })

        return updatedExpense
      }

      return null
    }
  }
}
