var plivo = require('plivo');

const createMessage = (dest, msg, AUTH, TOKEN) => {
    'use strict';
    var client = new plivo.Client(AUTH, TOKEN);
    client.messages.create(
        "12082072987",
        dest,
        msg, {
            method: "POST",
            url: "https://plivo-express.herokuapp.com"
        }
    ).then(res => {
        console.log(res)
    })
}

module.exports = createMessage