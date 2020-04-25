var plivo = require('plivo');

const AUTH = "MAMWU1M2FKMZCXMWUZOG"
const TOKEN = "OGU1NmY4YzlmOWNiNDVhZDU1MGQzZDhjNmMyYWE0"

const src = "12082072987"


// const msg = "powerpack"
// const powerpack = "b2bd3803-3c75-47b6-bf6f-2ea3b972a170"

createMessage = (dest, msg) => {
    'use strict';
    var client = new plivo.Client(AUTH, TOKEN);
    client.messages.create(
        src, //src
        dest, // dst
        msg, // text
        {
            method: "POST",
            url: "http://example.com/sms_status/"
        }
    ).then(res => {
        console.log(res);
    }, );
}

exports.createMessage = createMessage