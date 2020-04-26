var plivo = require('plivo')

const AUTH = 'MAMWU1M2FKMZCXMWUZOG'
const TOKEN = 'OGU1NmY4YzlmOWNiNDVhZDU1MGQzZDhjNmMyYWE0'

const src = '12082072987'

const getLogs = () => {
    'use strict'
    var client = new plivo.Client(AUTH, TOKEN)
    // const uuid = '99307b44-8712-11ea-b9e3-0242ac110003'

    // let msg = client.messages.get(uuid)
    // return msg
    return client.messages
        .list({
            limit: 100,
            offset: 1
        })
        .then(res => {
            return res
        })
}

module.exports = getLogs