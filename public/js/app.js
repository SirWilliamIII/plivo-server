console.log('Client side javascript file is loaded!')

let inputForm = document.getElementById("form1")
const message = document.querySelector("input[name='message']")
const number = document.querySelector("input[name='number']")
const messageOne = document.querySelector('#resultsMessage')
const messageTwo = document.querySelector('#resultsMessage2')
const resultMessage = document.querySelector('#resultsMessage1')
const resultMessageThree = document.querySelector('#resultsMessage3')

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
    inputForm.addEventListener('submit', e => {
        e.preventDefault()

        const m = message.value
        const n = number.value

        messageOne.textContent = 'Loading...'
        messageTwo.textContent = ''

        if (isValidNum(number)) {
            fetch(localUrl + "/send_message?number=" + n + "&message=" + m)
                .then(res => {
                    console.log(res)
                    if (res.status != 200) {
                        messageOne.textContent = "Error"
                    } else {
                        messageOne.textContent = "Sent message: " + m
                        messageTwo.textContent = "To number: " + n
                    }
                })
            m = ''
            n = ''
        }

    })
}

let dateForm = document.getElementById("form2")
let fromDate = document.querySelector("input[name='fromDate']")
let toDate = document.querySelector("input[name='toDate']")


if (dateForm) {
    dateForm.addEventListener('click', e => {
        e.preventDefault()

        fetch(localUrl + "/logs?fromDate=" + fromDate.value + "&toDate=" + toDate.value)
            .then(res => {
                if (res.status != 200) {
                    resultMessage.textContent = "Error"
                    resultMessageThree.textContent = "Loading..."
                } else {
                    resultMessage.textContent = res.status
                }
            }).catch(e => {
                console.log(e)
            })
    })
}