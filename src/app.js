const express = require('express')

const app = express()
const PORT = 8888

app.get('/', (req, res) => {
	res.send('Hello')
})

app.get('/logs', (req, res) => {
	res.send({
		message: 'this is the message',
		name: "person's name"
	})
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})
