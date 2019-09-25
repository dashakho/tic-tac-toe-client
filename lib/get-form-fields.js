'use strict'
// from get-form-fields.md
// Then, in your Javascript, you'd do something like this:
//
// const getFormFields = require('<path to lib>/get-form-fields.js')
//
// $('#create-book').on('submit', function (event) {
//   event.preventDefault()
//
//   const form = event.target
//   const bookData = getFormFields(form)
// })
// ```
//
// Then, the `bookData` variable would look like this:
//
// js
// {
//   book: {
//     title: "<whatever was entered in the title input >",
//     author: "<whatever was entered in the author input>"
//   }
// }

const addNestedValue = require('./add-nested-value')

const getFormFields = (form) => {
  const target = {}

  const elements = form.elements || []
  for (let i = 0; i < elements.length; i++) {
    const e = elements[i]
    if (!e.hasAttribute('name')) {
      continue
    }

    let type = 'TEXT'
    switch (e.nodeName.toUpperCase()) {
      case 'SELECT':
        type = e.hasAttribute('multiple') ? 'MULTIPLE' : type
        break
      case 'INPUT':
        type = e.getAttribute('type').toUpperCase()
        break
    }

    const name = e.getAttribute('name')

    if (type === 'MULTIPLE') {
      for (let i = 0; i < e.length; i++) {
        if (e[i].selected) {
          addNestedValue(target, name, e[i].value)
        }
      }
    } else if ((type !== 'RADIO' && type !== 'CHECKBOX') || e.checked) {
      addNestedValue(target, name, e.value)
    }
  }

  return target
}

module.exports = getFormFields
