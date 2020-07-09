document.addEventListener('click', (e) => {
            //Delete Feature
            if (e.target.classList.contains('delete')) {
                let userInput = prompt('Are you sure???`)
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