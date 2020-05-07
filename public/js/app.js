console.log('Client side javascript file is loaded!')

let inputForm = document.getElementById("form1")
const message = document.querySelector("input[name='message']")
const number = document.querySelector("input[name='number']")
const messageOne = document.querySelector('#resultsMessage')
const messageTwo = document.querySelector('#resultsMessage2')
let resultMessage = document.querySelector('#resultsMessage1')
let resultMessage1 = document.querySelector('#resultsMessage3')

const prodUrl = "https://plivo-express.herokuapp.com"
const localUrl = "http://localhost:3000"

const isValidNum = (num) => {
    var valNum = /^\+?[0-9]+$/;
    if (num.value.match(valNum)) {
        return true;
    } else {

        alert("Please enter valid phone number");
        return false;
    }
}

const isBlank = (message) => {
    if (message != "") {
        return true;
    } else {
        alert("Do not leave message field blank");
        return false;
    }
}

const isValidDate = (date) => {
    var valDate = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]/
    if (date.value.match(valDate)) {
        return true;
    } else {

        alert("Please enter date");
        return false;
    }

}

if (inputForm) {
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault()

        messageOne.textContent = 'Loading...'
        messageTwo.textContent = ''

        if (isValidNum(number)) {
            fetch(prodUrl + '/send_message?number=' + number.value + '&message=' + message.value).then((res) => {
                console.log(res)
                if (res.status != 200) {
                    messageOne.textContent = 'Error'
                } else {
                    messageOne.textContent = 'Sent message: ' + message.value
                    messageTwo.textContent = 'To number: ' + number.value
                }
            })
        }
    })
}

let dateForm = document.getElementById("form2")
let fromDate = document.getElementById('fDate')
let toDate = document.getElementById('tDate')
const submitButton = document.getElementById('submitButton')



if (dateForm) {
    submitButton.addEventListener('submit', (e) => {
        e.preventDefault()
        resultMessage1.textContent = 'Loading...'
        fetch(prodUrl + '/logs?fromDate=' + fromDate.value + '&toDate=' + toDate.value)
            .then((res) => {
                console.log(res)
                if (res.status != 200) {
                    resultMessage.textContent = 'Error'
                } else {
                    resultMessage1.textContent = res.status

                }
            })
            .catch((e) => {
                console.log(e)
            })
    })
}