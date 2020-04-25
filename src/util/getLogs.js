var plivo = require('plivo');

const AUTH = "MAMWU1M2FKMZCXMWUZOG"
const TOKEN = "OGU1NmY4YzlmOWNiNDVhZDU1MGQzZDhjNmMyYWE0"

const src = "12082072987"


// const msg = "powerpack"
// const powerpack = "b2bd3803-3c75-47b6-bf6f-2ea3b972a170"

getLogs = () => {
    'use strict';
    var client = new plivo.Client(AUTH, TOKEN);
    let msg = client.messages.get('99307b44-8712-11ea-b9e3-0242ac110003')

    console.log(msg)

    msg.then(res => {
        console.log(res.id)
    })


}


exports.getLogs = getLogs