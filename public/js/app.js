console.log('Client side javascript file is loaded!')

var msgUrl = 'http://localhost:3333/sendmessage?number=!&message=!'

fetch(msgUrl).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data)
        }
    })
})


var logsUrl = 'http://localhost:3333/logs'

fetch(msgUrl).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data)
        }
    })
})