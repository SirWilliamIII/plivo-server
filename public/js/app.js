let inputForm = document.getElementById("form1")
const message = document.querySelector("input[name='message']")
const number = document.querySelector("input[name='number']")

let resMessage = document.getElementById('resultsMessage')
let resMessage2 = document.getElementById('resultsMessage2')

let resMessage3 = document.getElementById('resultsMessage3')
let resMessage4 = document.getElementById('resultsMessage4')

let dateForm = document.getElementById("form2")
let fromDate = document.getElementById('fDate')
let toDate = document.getElementById('tDate')
const submitButton = document.getElementById('submitButton')

const url = "https://plivo-express.herokuapp.com"


console.log('Client side javascript file is loaded!')

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
        resMessage.textContent = 'Loading...'
        if (isValidNum(number)) {
            fetch(url + '/send_message?number=' + number.value + '&message=' + message.value).then((res) => {
                if (res.status != 200) {
                    resMessage.textContent = 'Error'
                } else {
                    resMessage.textContent = 'Sent message: ' + message.value
                    resMessage2.textContent = 'To number: ' + number.value
                }
            })
        }
    })
}


if (dateForm) {
    submitButton.addEventListener('submit', (e) => {
        e.preventDefault()

        resMessage3.textContent = 'Loading...'
        resMessage4.textContent = ''

        fetch(url + '/logs?fromDate=' + fromDate + '&toDate=' + toDate)
            .then((res) => {
                if (res.status != 200) {
                    resMessage3.textContent = 'Error'
                } else {
                    resMessage4.textContent = res.status
                }
            })
            .catch((e) => {
                console.log(e)
            })
    })
}