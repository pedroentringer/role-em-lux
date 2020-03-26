'use strict'

const Mail = use('Mail')
const Env = use('Env')

class NewUserMail {
  static get concurrency () {
    return 1
  }

  static get key () {
    return 'NewUserMail-job'
  }

  async handle ({ email, username }) {
    await Mail.send(
      ['emails.new_user'],
      { username },
      message =>
        message
          .to(email)
          .from(Env.get('MAIL_FROM'), Env.get('MAIL_FROM_NAME'))
          .subject('Seu usuário foi criado')
    )
  }
}

module.exports = NewUserMail
