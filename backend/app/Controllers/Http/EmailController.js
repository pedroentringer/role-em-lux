'use strict'

const Mail = use('Mail')
const Env = use('Env')

class SessionController {
  async store ({ request, response, auth }) {
    const mailData = request.only(['name', 'email', 'phone', 'message'])

    try {
      await Mail.send(
        ['emails.contact_website'],
        mailData,
        message =>
          message
            .to(Env.get('MAIL_CONTACT'))
            .from(Env.get('MAIL_FROM'), Env.get('MAIL_FROM_NAME'))
            .subject('Contato pelo site')
      )
      return response.status(201).send()
    } catch (err) {
      return response.status(500).send({ message: err.message })
    }
  }
}

module.exports = SessionController
