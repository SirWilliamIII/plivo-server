const path = require('path')
const express = require('express')
const hbs = require('hbs')
const helpers = require('handlebars-helpers');

const messages = require('./util/createMessage')
const logs = require('./util/getLogs')

const app = express()
const PORT = process.env.PORT || 3000


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

	let f = ""
	let t = ""

	if (!req.query.fromDate || !req.query.toDate) {
		logs("2020-03-01 01:01", "2020-05-01 01:01")
			.then(resp => {
				console.log(resp)
				return resp
			}).then(r => {
				res.render('logs', {
					logs: r
				})
			})
	} else if (req.query.fromDate || req.query.toDate) {

		f = req.query.fromDate
		t = req.query.toDate

		logs(f, t)
			.then(resp => {

				return resp
			}).then(r => {
				console.log(r)
				res.render('logs', {
					logs: r
				})
			})

	}
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