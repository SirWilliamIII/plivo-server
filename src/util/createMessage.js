var plivo = require('plivo');

const AUTH = "MAMWU1M2FKMZCXMWUZOG"
const TOKEN = "OGU1NmY4YzlmOWNiNDVhZDU1MGQzZDhjNmMyYWE0"

const createMessage = (dest, msg) => {
    'use strict';
    var client = new plivo.Client(AUTH, TOKEN);
    client.messages.create(
        "12082072987",
        dest,
        msg, {
            method: "POST",
            url: "http://example.com/sms_status/"
        }
    ).then(res => {
        console.log(res)
    })
}

module.exports = createMessage