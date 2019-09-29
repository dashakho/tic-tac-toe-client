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
