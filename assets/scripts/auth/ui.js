'use strict'
// require store object, so we can save the user and their token

const store = require('../store')

const successMessage = function(newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function(newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function() {
  successMessage('Signed up successfully!')
  $('.passwordempty').val('')
}

const onSignUpFailure = function() {
  failureMessage('Sign up failed.')
  $('.passwordempty').val('')
  $('.emailempty').val('')
}

// responseData is the data the API sends back, when we make a request.
// in this case, it has
const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully!')
  // console.log('responseData is', responseData)
  // save the 'user' we got from the API inside of 'store' so we
  // can use it later from any file
  store.user = responseData.user
  // console.log('store is', store)
  // $('#sign-in-hide').hide()
  $('.auth-hide, .auth-show').toggleClass('auth-hide auth-show')
  // $('.auth-show').toggleClass('auth-hide auth-show')
  $('.passwordempty').val('')
  $('.emailempty').val('')
  // $('.emailempty').trigger('reset')


}
const onSignInFailure = function() {
  failureMessage('Sign in failed.')
  $('.passwordempty').val('')
  $('.emailempty').val('')
  // $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function() {
  $('#change-password-hide').hide()

  successMessage('Changed password successfully!')
  $('.passwordempty').val('')
}

const onChangePasswordFailure = function() {
  failureMessage('Change password failed.')
  $('.passwordempty').val('')
}

const onSignOutSuccess = function() {
  successMessage('Signed out successfully!')
  $('.auth-hide, .auth-show').toggleClass('auth-hide auth-show')
  $('.container').hide()
  $('.emailempty').val('')
}
const onSignOutFailure = function() {
  failureMessage('Sign out failed.')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  successMessage,
  failureMessage
}
