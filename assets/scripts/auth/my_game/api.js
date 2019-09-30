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
      console.log(totalGames)
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGame,
  getGames
}
