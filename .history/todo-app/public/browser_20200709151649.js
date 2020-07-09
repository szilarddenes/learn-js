function itemTemplate(item) {
  console.log('itemTemplate -> item.text: ', adat.text)

  return `<li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
  <span class="item-text">${adat.text}</span>
  <div>
    <button data-id="${adat._id}" class="edit-me btn btn-secondary btn-sm mr-1" >Edit</button>
    <button data-id="${adat._id}" class="delete-me btn btn-danger btn-sm">Delete</button>
  </div>
</li>`
}

//Create on the fly load Feature
let createField = document.getElementById('create-field').value

document.getElementById('create-form').addEventListener('submit', (e) => {
  e.preventDefault()

  axios
    .post('/create-item', {
      text: createField.value,
    })
    .then((response) => {
      //   e.target.parentElement.parentElement.remove()
      document
        .getElementById('item-list')
        .insertAdjacentHTML('beforeend', itemTemplate(response.data))
      console.log('item created')
console.log('createField', createField)

    })
    .catch(() => {
      console.log('Please try again later')
    })
})

document.addEventListener('click', (e) => {
  //Delete Feature
  if (e.target.classList.contains('delete-me')) {
    if (confirm('Delete this? Really?')) {
      axios
        .post('/delete-item', {
          id: e.target.getAttribute('data-id'),
        })
        .then(() => {
          e.target.parentElement.parentElement.remove()
          console.log('item deleted')
        })
        .catch(() => {
          console.log('Please try again later')
        })
    }
  }

  //Update feature
  //e.target = the target of the clicked item---if contains the #id
  if (e.target.classList.contains('edit-me')) {
    let userInput = prompt(
      'Enter ur new text:',
      e.target.parentElement.parentElement.querySelector('.item-text').innerHTML
    )

    if (userInput) {
      axios
        .post('/update-item', {
          text: userInput,
          id: e.target.getAttribute('data-id'),
        })
        .then(() => {
          e.target.parentElement.parentElement.querySelector(
            '.item-text'
          ).innerHTML = userInput
        })
        .catch(() => {
          console.log('Please try again later')
        })
    }
  }
})
