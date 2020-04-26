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


inputForm.addEventListener('submit', e => {
    e.preventDefault()

    const m = message.value
    const n = number.value

    messageOne.textContent = 'Loading...'

    fetch("http://localhost:3000/send_message?number=" + n + "&message=" + m)
        .then(res => {
            console.log(res)
            if (res.status != 200) {
                messageOne.textContent = "Error"
            } else {
                messageOne.textContent = ""
            }
        })
})

let dateForm = document.getElementById("form2")
const fromDate = document.querySelector("input[name='fromDate']")
const toDate = document.querySelector("input[name='toDate']")

dateForm.addEventListener('click', e => {
    e.preventDefault()

    const f = fromDate.value
    const t = toDate.value
    console.log(f)
    fetch("http://localhost:3000/logs?fromDate=" + f + "&toDate=" + t)
        .then(res => {
            if (res.status != 200) {
                messageOne.textContent = "Error"
            } else {
                messageOne.textContent = ""
            }
        })
})