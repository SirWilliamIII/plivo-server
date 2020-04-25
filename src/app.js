const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const PORT = 3333

const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

const message = require('./util/message')


app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirPath))


app.get('/send_message', (req, res) => {

	if (!req.query.number) {
		return res.send({
			error: "Enter a number"
		})
	}
	if (!req.query.msg) {
		return res.send({
			error: "Enter a message"
		})
	}
	message.createMessage(req.query.number, req.query.msg)
	data = {
		message: req.query.msg,
		number: req.query.number
	}
	res.send(data)
})

app.get('/logs', (req, res) => {
    res.render('logs', {
        title: 'Logs',
        name: 'Message logs'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Will Carpenter',
        errorMessage: 'Page not found.'
    })
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})