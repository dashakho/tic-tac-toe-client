'use strict'


const store = require('../../store')
const gameLogic = require('./logic')
const message = require('../ui.js')



const onNewGameSuccess = function(responseData) {
  message.successMessage('Successfully updated game')
  store.game = responseData.game
  console.log('store is', store)
}
const onNewGameFailure = function() {
  message.failureMessage('You have not created a new game')
  store.game = responseData.game
  console.log('store is', store)
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure
}






// const {cells} = require('./constants.js')
// let player = true
//
// const cellFill = (currentPlayer, cellChoice) => {
//   if (currentPlayer) {
//     $(cellChoice).text('X')
//     player = false
//   } else {
//     $(cellChoice).text('O')
//     player = true
//   }
// }
//
// const cellEvent = (cell) => {
//   cellFill(player, cell)
//   $(cell).off('click')
// }
//
// const displayWinner = (player) => {
//   $('.hide-board').hide()
//   $('#form-reset').show()
//   $(`#${player}-win`).show()
// }
// const displayP1Winner = () => {
//   displayWinner('p1')
// }
// const displayP2Winner = () => {
//   displayWinner('p2')
// }
//
//
//
//
// const updateGameSuccess
//
// module.exports = {
//
//   cellEvent,
//   displayP1Winner,
//   displayP2Winner
// }

// const store = require('../store')
// const gameLogic = require('./logic')
//
// const onCreateGameSuccess = (gameData) => {
//   $('#sign-in-message').html('')
//   store.turn = 1
//   store.cells = gameData.game.cells
//   store.player = 'x'
//   store.over = gameData.game.over
//   $('#gameboard').fadeIn('fast')
//   $('#game-status').fadeIn('fast')
//   $('.box').empty()
//   document.getElementById('message').style.display = 'none'
//   $('#message').text(`It's ${store.player}'s turn!`)
// }
//
// module.exports = {
//   onCreateGameSuccess
// }
