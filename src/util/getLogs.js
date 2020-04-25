var plivo = require('plivo');

const AUTH = "MAMWU1M2FKMZCXMWUZOG"
const TOKEN = "OGU1NmY4YzlmOWNiNDVhZDU1MGQzZDhjNmMyYWE0"

const src = "12082072987"


// const msg = "powerpack"
// const powerpack = "b2bd3803-3c75-47b6-bf6f-2ea3b972a170"

getLogs = () => {
    'use strict';
    var client = new plivo.Client(AUTH, TOKEN);
    const uuid = '99307b44-8712-11ea-b9e3-0242ac110003'

    let msg = client.messages.get(uuid)
    return msg
}


exports.getLogs = getLogs