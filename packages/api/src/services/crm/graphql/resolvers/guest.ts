import fetch from 'isomorphic-fetch'

const isProduction = process.env.NODE_ENV === 'production'

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
    getGuestByGoogleContactId: async (
      _: any,
      { googleContactId }: { googleContactId: string },
      { models }: { models: any }
    ): Promise<any> => {
      const data = await models.Guest.findAll({
        where: {
          googleContactId
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
    importGuests: async (
      _: any,
      { input }: { input: any },
      { models }: { models: any }
    ): Promise<any> => {
      const { refreshToken } = input
      const baseDomain = isProduction ? 'https://ranchosanpancho.com' : 'http://localhost:3000'
      const response = await fetch(`${baseDomain}/dashboard/import/contacts?token=${refreshToken}`)
      const guests: any = []

      if (response.ok) {
        const googleContacts: any = await response.json()

        if (googleContacts.length > 0) {
          googleContacts.forEach(async (contact: any) => {
            const contactExists = await models.Guest.findAll({
              where: { googleContactId: contact.googleContactId }
            })

            if (contactExists.length === 0 && contact.email) {
              const createdGuest = await models.Guest.create(contact)
              guests.push(createdGuest)
            }
          })
        }

        return guests
      }

      return guests
    }
  }
}
