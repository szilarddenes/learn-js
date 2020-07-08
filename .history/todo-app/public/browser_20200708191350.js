//

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