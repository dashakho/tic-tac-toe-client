'use strict'
// my code:

const authEvents = require('./auth/events.js')
const gameEvents = require('./auth/my_game/events.js')

// const exampleEvents = require('./examples/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#new-game').on('click', gameEvents.onNewGame)
  $('.box').on('click', gameEvents.onClick)
  $('#get-games').on('click', gameEvents.onGetGames)
$('.container').hide()


  // $('#get-id').on('click', gameEvents.onGetId)
})
