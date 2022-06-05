export default {
  Query: {
    getReservations: (_: any, _args: any, { models }: { models: any }): any[] =>
      models.Reservations.findAll({
        order: [['startDate', 'ASC']]
      }),
    getReservationById: (_: any, { id }: { id: string }, { models }: { models: any }): any[] =>
      models.Reservations.findAll({
        where: {
          id
        }
      })
  },
  Mutation: {
    createReservation: async (
      _: any,
      { input }: { input: any },
      { models }: { models: any }
    ): Promise<any> => {
      const createdReservation = await models.Reservations.create({ ...input })

      return createdReservation
    },

    deleteReservation: async (
      _: any,
      { id }: { id: string },
      { models }: { models: any }
    ): Promise<any> => {
      const reservationToRemove = await models.Reservations.findByPk(id)

      if (reservationToRemove) {
        await reservationToRemove.destroy({ where: { id } })
        return reservationToRemove
      }

      return null
    },

    editReservation: async (
      _: any,
      { id, input }: { id: string; input: any },
      { models }: { models: any }
    ): Promise<any> => {
      const ReservationToEdit = await models.Reservations.findByPk(id)

      if (ReservationToEdit) {
        const updatedReservation = await ReservationToEdit.update({ ...input }, { where: { id } })

        return updatedReservation
      }

      return null
    }
  }
}
