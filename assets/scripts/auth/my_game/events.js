'use strict'

// const store = require('../store')
const logic = require('./logic.js')
const ui = require('./ui')
const api = require('./api')
const getFormFields = require('../../../../lib/get-form-fields.js')

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}


let player = 'x'
const onClick = function (event) {
  // event = Event is the click happening in app.js
  // target = takes the specific html element (div for this example) that's been clicked
  if (player === 'x') {
    $(event.target).text('x')
    player = 'o'
  } else if (player === 'o') {
    $(event.target).text('o')
    player = 'x'
  }
}
module.exports = {
  onNewGame,
  onClick
}


// const addHandlers = () => {
//   $('.box').on('click', function (event) {
//     ui.cellEvent(event.target)
//     const id = event.target.id
//     logic.pushMoveArr(id)
//
//     const over = logic.checkWinEvent(event.target.innerHTML)
//     api.updateGame(event.target.innerHTML, id, over)
//       .then(apiUi.updateGameSuccess)
//       .catch(apiUi.updateGameFailure)
//   })
// }
