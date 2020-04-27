var plivo = require('plivo')

const getLogs = (fromTime, toTime, AUTH, TOKEN) => {
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