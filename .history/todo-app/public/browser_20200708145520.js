document.addEventListener('click', (e) => {
    //e.target = the target of the clicked item---if contains the #id
    if (e.target.classList.contains('edit-me')) {
        let userInput = prompt('Enter ur new text:')
            //post a = url, post b = data it's going to be sent to the url --will return a promise --for not known time interval is useful --on the fly.

        //then()--it's not going to run until the post is not ready or action is not complete
        axios
            .post('/update-item', { text: userInput, })
            .then(() => {
                log.console('we are in the axios')
            })
            .catch(() => {
                console.log('Please try again later')
            })
    }
})