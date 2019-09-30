'use strict'


const store = require('../../store')
const gameLogic = require('./logic')
const message = require('../ui.js')



const onNewGameSuccess = function(data) {
  message.successMessage('Successfully updated game')
  store.game = data.game
  console.log('store is', store)
}
const onNewGameFailure = function(data) {
  message.failureMessage('You have not created a new game')
  store.game = data.game
  console.log('store is', store)
}


const onGetGamesResults = data => {
  const gamesStarted = data.games
  const gamesPlayed = gamesStarted.filter(game => !game.over)
  // const gamesPlayed = gamesStarted.filter(game => game.over) all the games game.over = true
  // $('#get-games-message').text(`You've played ${gamesPlayed.length} games.`)
  message.successMessage(`You've played ${gamesPlayed.length} games.`)
}

const onGetResultsFail = data => {
  $('#get-games-message').text('Try again.')
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onGetGamesResults,
  onGetResultsFail

}
