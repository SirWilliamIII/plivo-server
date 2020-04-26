const path = require('path')
const express = require('express')
const hbs = require('hbs')

const messages = require('./util/createMessage')
const logs = require('./util/getLogs')

const app = express()
const PORT = 4000

const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirPath))

app.get('/', (req, res) => {
	res.render('index', {
		title: 'TEXT SOMEONE',
		name: 'Will Carpenter'
	})
})


// Endpoint to send text
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

	messages(req.query.number, req.query.message)

	res.render('send_message', {
		message: req.query.message,
		number: req.query.number
	})
})
////////////////////////////


app.get('/logs', (req, res) => {
	logs.getLogs()
		.then(res => {
			return res
		}).then(r => {
			res.render('logs', {
				title: r.fromNumber,
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