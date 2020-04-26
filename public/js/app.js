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
    var phoneno = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
    if (num.value.match(phoneno)) {
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

inputForm.addEventListener('submit', e => {
    e.preventDefault()

    const m = message.value
    const n = number.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    if (isValidNum(number)) {
        fetch("http://localhost:3000/send_message?number=" + n + "&message=" + m)
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

    const f = fromDate.value
    const t = toDate.value
    console.log(f)
    fetch("localhost:3000/logs?fromDate=" + f + "&toDate=" + t)
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