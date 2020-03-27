'use strict'

const Route = use('Route')

Route.post('sessions', 'SessionController.store')
Route.post('emails', 'EmailController.store')

Route.group(() => {
  Route.get('files/:id', 'FileController.show')
  Route.post('files', 'FileController.store')

  Route.resource('passwords', 'ForgotPasswordController')
    .only(['store', 'update'])

  Route.resource('users', 'UserController')
    .middleware(new Map([
      [['index'], ['is:administrator']]
    ]))
    .validator(new Map([
      [['store'], ['User/Store']],
      [['update'], ['User/Update']]
    ]))
    .only(['show', 'index', 'store', 'update'])
}).middleware(['auth'])
