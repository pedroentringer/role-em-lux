
'use strict'

const crypto = require('crypto')
const moment = require('moment')

const User = use('App/Models/User')
const Mail = use('Mail')
const Env = use('Env')

class ForgotPasswordController {
  async store ({ request, response }) {
    try {
      const { email, redirect_url } = request.all()
      const user = await User.findByOrFail('email', email)

      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()

      await Mail.send(
        ['emails.forgot_password'],
        {
          email: user.email,
          token: user.token,
          link: `${redirect_url}?token=${user.token}`
        },
        message => {
          message
            .to(user.email)
            .from(Env.get('MAIL_FROM'), Env.get('MAIL_FROM_NAME'))
            .subject('Recuperação de Senha')
        }
      )
    } catch (err) {
      return response.status(err.status).send({ error: { message: 'Algo não deu certo, esse e-mail existe?' } })
    }
  }

  async update ({ request, response, auth }) {
    try {
      const { token, password } = request.all()
      const user = await User.findByOrFail('token', token)

      const tokenExpired = moment().subtract('2', 'days').isAfter(user.token_created_at)

      if (tokenExpired) {
        return response.status(401).send({ error: { message: 'O token de recuperação está expirado' } })
      }

      user.token = null
      user.token_created_at = null
      user.password = password

      await user.save()
    } catch (err) {
      return response.status(err.status).send({ error: { message: 'Algo deu errado ao resetar sua senha.' } })
    }
  }
}

module.exports = ForgotPasswordController
