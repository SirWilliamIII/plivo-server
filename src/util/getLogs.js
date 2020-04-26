var plivo = require('plivo')

const AUTH = 'MAMWU1M2FKMZCXMWUZOG'
const TOKEN = 'OGU1NmY4YzlmOWNiNDVhZDU1MGQzZDhjNmMyYWE0'


const getLogs = (fromTime, toTime) => {
    'use strict'
    var client = new plivo.Client(AUTH, TOKEN)
    return client.messages
        .list({
            message_time__gt: fromTime,
            message_time__lte: toTime
        })
        .then(res => {
            return res
        })
}


module.exports = getLogs