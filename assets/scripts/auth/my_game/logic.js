'use strict'

const ui = require('./ui.js')
const store = require('../../store')
const onClick = require('../../app.js')

// gameboard = ['', '', '', '', '', '', '', '', ''] 9 elements

// [0, 1, 2]
// [3, 4, 5]
// [6, 7, 8]

// Winning combinations:

// [0, 1, 2] - row 1
// [3, 4, 5] - row 2
// [6, 7, 8] - row 3
// [0, 3, 6] - col 1
// [1, 4, 7] - col 2
// [2, 5, 8] - col 3
// [0, 4, 8] - diag 1
// [2, 4, 6] - diag 2

// let player = true
// let currentGame = [null, null, null, null, null, null, null, null, null]
// const winCombinations = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [2, 5, 8],
//   [1, 4, 7],
//   [0, 3, 6],
//   [0, 4, 8],
//   [2, 4, 6]
// ]



//START

// let player = 'X'
// const onPlay = event => {
//   if ($(event.target).text() === '') {
//     $(event.target).html(player)
//     const index = $(event.target).data('cell-index')
//     store.game.cells[index] = player
//     api.update(index, player)
//       .then(ui.onUpdateSuccess)
//       .catch(ui.onUpdateFailure)
//     if (player === 'X') {
//       player = 'O'
//     } else {
//       player = 'X'
//     }
//   }
//   onCheckForWin()
// }

// const onCheckForWin = function (player) {
//   if (store.game.cells[0] !== '' && (store.game.cells[0] === store.game.cells[1]) && store.game.cells[1] === store.game.cells[2]) {
//     console.log('Winner for this row!')
//   } else if (store.game.cells[3] !== '' && (store.game.cells[3] === store.game.cells[4]) && store.game.cells[4] === store.game.cells[5]) {
//     console.log('Winner!')
//   } else if (store.game.cells[6] !== '' && (store.game.cells[6] === store.game.cells[7]) && store.game.cells[7] === store.game.cells[8]) {
//     console.log('Winner!')
//   } else if (store.game.cells[0] !== '' && (store.game.cells[0] === store.game.cells[3]) && store.game.cells[3] === store.game.cells[6]) {
//     console.log('Winner!')
//   } else if (store.game.cells[1] !== '' && (store.game.cells[1] === store.game.cells[4]) && store.game.cells[4] === store.game.cells[7]) {
//     console.log('Winner!')
//   } else if (store.game.cells[2] !== '' && (store.game.cells[2] === store.game.cells[5]) && store.game.cells[5] === store.game.cells[8]) {
//     console.log('Winner!')
//   } else if (store.game.cells[0] !== '' && (store.game.cells[0] === store.game.cells[4]) && store.game.cells[4] === store.game.cells[8]) {
//     console.log('Winner!')
//   } else if (store.game.cells[2] !== '' && (store.game.cells[2] === store.game.cells[4]) && store.game.cells[4] === store.game.cells[8]) {
//     console.log('Winner!')
//   } else {
//     console.log('Draw!')
//   }
// }

//END https://git.generalassemb.ly/ga-wdi-boston/game-project/issues/2420

// const gameBoard = ['', '', '', '', '', '', '', '', '']
// store.turn = 0
//
// const winningCombos = gameBoard => {
//   if ((gameBoard[0] && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) ||
//     (gameBoard[3] && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) ||
//     (gameBoard[6] && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) ||
//     (gameBoard[0] && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) ||
//     (gameBoard[1] && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) ||
//     (gameBoard[2] && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) ||
//     (gameBoard[0] && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) ||
//     (gameBoard[2] && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6])) {
//
//     store.over = true
//     document.getElementById('message').style.display = 'none'
//     $('#message').fadeIn('fast')
//     $('#message').html(`Game Over: Player ${store.player} wins!`)
//     return true
//     // Whoever hits one of the listed winning combos on this turn wins
//   } else if (store.turn === 9) {
//     document.getElementById('message').style.display = 'none'
//     $('#message').fadeIn('fast')
//     $('#message').html(`Game Over: It's a tie!`)
//     store.over = true
//     return true
//     // Valid turns: 0-8. Turn 9 means the board is full, so it's a tie
//   } else {
//     store.over = false
//     return false
//     // Winning combos haven't been hit, and the board isn't full yet
//   }
// }
//
