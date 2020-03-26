'use strict'

const User = use('App/Models/User')

const Role = use('Role')
const Permission = use('Permission')

class SetupSeeder {
  async run () {
    /**
     * Creating administrator user
     */

    const user = await User.create({
      username: 'Pedro Entringer',
      email: 'pedroentringer97@gmail.com',
      password: '1234'
    })

    const role = await Role.create({
      slug: 'administrator',
      name: 'Administrator',
      description: 'Administrator of system'
    })

    await user.roles().attach([role.id])

    const permissions = await Permission.createMany([
      {
        slug: 'user_index',
        name: 'List Users',
        description: 'list all users'
      }
    ])

    for (const permission of permissions) {
      await role.permissions().attach([permission.id])
    }
  }
}

module.exports = SetupSeeder
