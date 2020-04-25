const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const PORT = 4000

const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

const messages = require('./util/createMessage')
const logs = require('./util/getLogs')


app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirPath))

app.get('', (req, res) => {
	res.render('index', {
		title: 'HOME',
		name: 'Will Carpenter'
	})
})


app.get('/send_message', (req, res) => {

	if (!req.query.number) {
		return res.send({
			error: "Enter a number"
		})
	}
	if (!req.query.message) {
		return res.send({
			error: "Enter a message"
		})
	}
	messages.createMessage(req.query.number, req.query.message)
	data = {
		message: req.query.message,
		number: req.query.number
	}
	res.render('send_message', {
		message: data.message,
		number: data.number
	})
})

app.get('/logs', (req, res) => {
	logs.getLogs()
		.then(res => {
			return res
		}).then(r => {
			res.render('logs', {
				date: r.messageTime,
				uuid: r.id,
				fromNum: r.fromNumber,
				toNum: r.toNumber
			})
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