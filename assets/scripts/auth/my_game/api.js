'use strict'

const config = require('../../config')
const store = require('../../store')

const newGame = (data) => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

let totalGames = 0
const getGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    success: function (data) {
      totalGames = data.games.length
      // console.log(totalGames)
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (index, value, over) {
  const dataObj = {
    game: {
      cell: {
        index: index,
        value: value
      },
      over: over
    }
  }

  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: dataObj
  })
}

module.exports = {
  newGame,
  getGames,
  updateGame
}
