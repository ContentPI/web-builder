import models from '../models'

async function createFirstUser(): Promise<any> {
  const existingUsers = await models.User.findAll()

  if (existingUsers.length === 0) {
    const newUser: any = await models.User.create({
      username: 'admin',
      password: '12345678',
      email: 'admin@blog.com',
      role: 'god',
      active: true
    })

    return newUser
  }

  return null
}

function setInitialSeeds(): void {
  createFirstUser()
}

export default setInitialSeeds
