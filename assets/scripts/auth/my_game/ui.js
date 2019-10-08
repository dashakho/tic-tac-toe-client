'use strict'


const store = require('../../store')
const gameLogic = require('./logic')
const message = require('../ui.js')


const onNewGameSuccess = function(data) {
  message.successMessage('Successfully updated game')
  setTimeout(function () { $('#message').text('') }, 1000)
  store.game = data.game
  // console.log('store is', store)
$('.container').show()
}

const onNewGameFailure = function(data) {
  message.failureMessage('You have not created a new game')
  setTimeout(function () { $('#message').text('') }, 1000)
  store.game = data.game
  // console.log('store is', store)
}

const onGetGamesResults = data => {
  const gamesStarted = data.games
  const gamesPlayed = gamesStarted.filter(game => !game.over)
  message.successMessage(`You've played ${gamesPlayed.length} games.`)
  setTimeout(function () { $('#message').text('') }, 2000)
}

const onGetResultsFail = data => {
  $('#get-games-message').text('Try again.')
  setTimeout(function () { $('#message').text('') }, 1000)
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onGetGamesResults,
  onGetResultsFail
}
