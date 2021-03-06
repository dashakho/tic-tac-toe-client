'use strict'

const ui = require('./ui.js')
const store = require('../../store')
const onClick = require('../../app.js')

const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [2, 5, 8],
  [1, 4, 7],
  [0, 3, 6],
  [0, 4, 8],
  [2, 4, 6]
]

function initialGameValues () {
  store.players.x = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]

  store.players.o = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
}

function resetBoard () {
  initialGameValues()

  store.currentPlayer = 'x'
  store.gameOver = false

  $('.box').each((index, cell) => {
    $(cell).text('')
  })
}

function checkWinnerStats () {
  const currentCombinations = store.players[store.currentPlayer]
  let combinations = []

  currentCombinations.forEach(row => {
    row.forEach(cell => {
      if (typeof cell === 'number') {
        combinations.push(cell)
      }
    })
  })

  winCombinations.forEach(combination => {
    let isWinComination = true

    combination.forEach((item, index, arr) => {
      if (!combinations.includes(item)) { // if index is not found
        isWinComination = false
      }

      if ((arr.length - 1) === index && isWinComination) { // last iteration
        $('#new-message').text(store.currentPlayer + ' is win!')
        setTimeout(function () { $('#new-message').text('') }, 3000)
        store.gameOver = true
        // return
      }
    })
  })

  if (combinations.length === 5) {
    $('#new-message').text('Tie!')
    setTimeout(function () { $('#new-message').text('') }, 3000)
    store.gameOver = true
  }
}

initialGameValues()

module.exports = {
  resetBoard,
  checkWinnerStats
}
