<<<<<<< HEAD
function itemTemplate(item) {
    return `<li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
    <span class="item-text">${azAdat.text}</span>
    <div>
    <button data-id="${azAdat._id}" class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
    <button data-id="${azAdat._id}" class="delete-me btn btn-danger btn-sm">Delete</button>
    </div>
    </li>`
  }
  
  // Create Feature
  let createField = document.getElementById("create-field").value

  
  document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault()
    axios.post('/create-item', {text: createField.value}).then(function (response) {
      // Create the HTML for a new item
      console.log('in the axios.post')
      console.log("createField", createField.value)
      document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data))
      createField.value = ""
      createField.focus()
    }).catch(function() {
      console.log("Please try again later.")
    })
  })
  
  document.addEventListener("click", function(e) {
    // Delete Feature
    if (e.target.classList.contains("delete-me")) {
      if (confirm("Do you really want to delete this item permanently?")) {
        axios.post('/delete-item', {id: e.target.getAttribute("data-id")}).then(function () {
          e.target.parentElement.parentElement.remove()
        }).catch(function() {
          console.log("Please try again later.")
        })
      }
    }
  
    // Update Feature
    if (e.target.classList.contains("edit-me")) {
      let userInput = prompt("Enter your desired new text", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML)
      if (userInput) {
        axios.post('/update-item', {text: userInput, id: e.target.getAttribute("data-id")}).then(function () {
          e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput
        }).catch(function() {
          console.log("Please try again later.")
        })
      }
    }
  })
=======
// function itemTemplate(item){
//   return `<li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
//   <span class="item-text">${item.text}</span>
//   <div>
//     <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1" >Edit</button>
//     <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">Delete</button>
//   </div>
// </li>`
// }
// //initial page load render

// let ourHTML = items.map((item) => {
//   return itemTemplate(item)
// }).join('')
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
    //post a = url, post b = data it's going to be sent to the url --will return a promise --for not known time interval is useful --on the fly.

    //then()--it's not going to run until the post is not ready or action is not complete
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
>>>>>>> 67e5a706a3b1b9b44d289a997d46f83f9e8969dc
