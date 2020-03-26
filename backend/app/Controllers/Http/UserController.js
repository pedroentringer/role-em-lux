'use strict'

const User = use('App/Models/User')
const Database = use('Database')

class UserController {
  async index ({ request }) {
    let { page } = request.all()

    if (!page) page = 1

    const users = await Database
      .from('users')
      .select(['id', 'username', 'email', 'type', 'phone', 'created_at', 'updated_at'])
      .paginate(page, 10)

    return users
  }

  async show ({ response, params, auth }) {
    const { user } = auth

    const isAdministrator = await user.roles().where('slug', 'administrator').first()

    if (isAdministrator) {
      const findById = await User.findOrFail(params.id)
      return findById
    }

    if (auth.user.id !== params.id) {
      throw { name: 'AccessDenied', message: 'You cannot see someone else\'s profile' }
    }

    return user
  }

  async store ({ request }) {
    const data = request.only(['username', 'email', 'password', 'type', 'phone'])

    const user = await User.create(data)

    return user
  }

  async update ({ params, request }) {
    const data = request.only(['username', 'email', 'password', 'type', 'phone'])

    const user = await User.findOrFail(params.id)

    user.merge(data)

    await user.save()

    return user
  }
}

module.exports = UserController
