'use strict'

const Env = use('Env')
const Youch = use('youch')
const BaseExceptionHandler = use('BaseExceptionHandler')
const Config = use('Config')

const Sentry = require('@sentry/node')
Sentry.init({ dsn: Config.get('services.sentry.dsn') })

/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 *
 * @class ExceptionHandler
 */
class ExceptionHandler extends BaseExceptionHandler {
  /**
   * Handle exception thrown during the HTTP lifecycle
   *
   * @method handle
   *
   * @param  {Object} error
   * @param  {Object} options.request
   * @param  {Object} options.response
   *
   * @return {void}
   */
  async handle (error, { request, response, auth }) {
    const { user } = auth

    if (error.name === 'ValidationException') {
      return response.status(error.status).send(error.messages)
    }

    if (error.name === 'ForbiddenException') {
      const roles = await user.roles().fetch()
      return response.status(error.status).send({ error: { message: error.message, request: { method: request.method(), url: request.url() }, roles } })
    }

    if (error.name === 'AccessDenied') {
      return response.status(401).send({ error: { message: error.message, request: { method: request.method(), url: request.url() } } })
    }

    if (Env.get('NODE_ENV') === 'development') {
      const youch = new Youch(error, request.request)
      const errorJSON = await youch.toJSON()

      return response.status(error.status).send(errorJSON)
    }

    return response.status(error.status).send()
  }

  /**
   * Report exception for logging or debugging.
   *
   * @method report
   *
   * @param  {Object} error
   * @param  {Object} options.request
   *
   * @return {void}
   */
  async report (error, { request }) {
    if (Env.get('NODE_ENV') === 'production') {
      Sentry.captureException(error)
    }
  }
}

module.exports = ExceptionHandler
