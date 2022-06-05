export default {
  Query: {
    getGuests: (_: any, _args: any, { models }: { models: any }): any[] =>
      models.Guest.findAll({
        include: [
          {
            model: models.Reservation,
            as: 'reservations'
          },
          {
            model: models.FreeNight,
            as: 'freeNights'
          },
          {
            model: models.Invoice,
            as: 'invoice'
          }
        ],
        order: [['fullName', 'ASC']]
      }),
    getGuestbyId: async (
      _: any,
      { id }: { id: string },
      { models }: { models: any }
    ): Promise<any> => {
      const data = await models.Guest.findAll({
        where: {
          id
        },
        include: [
          {
            model: models.Reservation,
            as: 'reservations'
          },
          {
            model: models.FreeNight,
            as: 'freeNights'
          },
          {
            model: models.Invoice,
            as: 'invoice'
          }
        ]
      })

      return data[0]
    },
    getGuestbyEmail: async (
      _: any,
      { email }: { email: string },
      { models }: { models: any }
    ): Promise<any> => {
      const data = await models.Guest.findAll({
        where: {
          email
        },
        include: [
          {
            model: models.Reservation,
            as: 'reservations'
          },
          {
            model: models.FreeNight,
            as: 'freeNights'
          },
          {
            model: models.Invoice,
            as: 'invoice'
          }
        ]
      })

      return data[0]
    }
  },
  Mutation: {
    createGuest: async (
      _: any,
      { input }: { input: any },
      { models }: { models: any }
    ): Promise<any> => {
      const createGuest = await models.Guest.create({ ...input })
      return createGuest
    },
    editGuest: async (
      _: any,
      { id, input }: { id: string; input: any },
      { models }: { models: any }
    ): Promise<any> => {
      const guestToEdit = await models.Guest.findByPk(id)

      if (guestToEdit) {
        const updatedInformation = await guestToEdit.update({ ...input }, { where: { id } })

        return updatedInformation
      }

      return {}
    }
  }
}
