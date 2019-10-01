'use strict'

const store = require('../../store');
const logic = require('./logic.js');
const ui = require('./ui');
const api = require('./api');
const getFormFields = require('../../../../lib/get-form-fields.js')

const onNewGame = function (event) {
  event.preventDefault()
  logic.resetBoard()
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const onClick = function (event) {
  // event = Event is the click happening in app.js
  // target = takes the specific html element (div for this example) that's been clicked

  const cellIndex = $(event.target).data('cell-index');
  const cellId = $(event.target).data('id');
  const cellRow = $(event.target).data('row');
  let nextPlayer = '';

  // console.log(store, store.currentPlayer)

  if(store.currentPlayer === 'x') {
    nextPlayer = 'o';
$('#new-message').text('It is O turn')
  } else {
    nextPlayer = 'x';
$('#new-message').text('It is X turn')
  }

  if (typeof store.players[store.currentPlayer][cellRow][cellId] === 'number' ||
      typeof store.players[nextPlayer][cellRow][cellId] === 'number') {  // Is busy (null)

      // console.log('This cell is busy');
$('#new-message').text('This cell is busy!')

  } else { // avaliable (number)
    store.players[store.currentPlayer][cellRow][cellId] = cellIndex;

    $(event.target).text(store.currentPlayer);

    logic.checkWinnerStats();

    if(store.currentPlayer === 'x') {
      store.currentPlayer = 'o';
    } else {
      store.currentPlayer = 'x';
    }
    if(store.gameOver) {
      logic.resetBoard();
    }
  }
}

const onGetGames = () => {
  event.preventDefault()
  api.getGames()
    .then(ui.onGetGamesResults)
    .catch(ui.onGetResultsFail)
}


module.exports = {
  onNewGame,
  onClick,
  onGetGames
}
