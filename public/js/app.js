console.log('Client side javascript file is loaded!')



// var logsUrl = "http://localhost:4000/logs"

// fetch(logsUrl).then(res => {
//     return res.json()
//         .then((data) => {
//             if (data.error) {
//                 console.log(data.error)
//             } else {
//                 console.log(data)
//             }
//         })
// })

let inputForm = document.getElementById("form1")
const message = document.querySelector("input[name='message']")
const number = document.querySelector("input[name='number']")
const messageOne = document.querySelector('#resultsMessage')
const messageTwo = document.querySelector('#resultsMessage2')
const resultMessage = document.querySelector('#resultsMessage1')
const resultMessageThree = document.querySelector('#resultsMessage3')

const isValidNum = (num) => {
    var valNum = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
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

inputForm.addEventListener('submit', e => {
    e.preventDefault()

    const m = message.value
    const n = number.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    if (isValidNum(number)) {
        fetch("https://plivo-express.herokuapp.com/send_message?number=" + n + "&message=" + m)
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

let dateForm = document.getElementById("form2")
const fromDate = document.querySelector("input[name='fromDate']")
const toDate = document.querySelector("input[name='toDate']")

dateForm.addEventListener('click', e => {
    e.preventDefault()

    let f = fromDate.value
    let t = toDate.value

    let b = "https://plivo-express.herokuapp.com/logs?fromDate="

    const createUri = (base, fromDate, toDate) => {
        let from = fromDate
        let to = toDate
        return base + from + "&toDate=" + to
    }

    fetch(createUri(b, f, t))
        .then(res => {
            if (res.status != 200) {
                messageOne.textContent = "Error"
            } else {
                messageOne.textContent = ""
            }
        })

    f = ''
    t = ''
})