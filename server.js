const express = require('express')
const next = require('next')
const mongoose = require('mongoose')
const models = require('./db-import.js')
const fs = require('fs')
const helmet = require('helmet')

const server = express()
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

mongoose.connect('mongodb://localhost/blogtest', {useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Server Code
app.prepare().then(() => {
	server.use(helmet())
	server.use(express.json())
	server.use(express.urlencoded({extended: true}))
	server.use(require('./api'))

	server.get('/about', (req, res) => {
		app.render(req, res, '/about', {})
	})

	server.get('/blog/:categoryUrl', (req, res) => {
		const categoryUrl = req.params.categoryUrl
		const queryParams = {categoryUrl: categoryUrl}
		app.render(req, res, '/categoryIndex', queryParams)
	})

	server.get('/blog/:categoryUrl/:postUrl', (req, res) => {
		const postUrl = req.params.postUrl
		const queryParams = {postUrl: postUrl}
		app.render(req, res, '/post', queryParams)
	})

	server.get('/', (req, res) => {
		app.render(req, res, '/index', {})
	})

	server.get('*', (req, res) => {
		return handle(req, res)
	})

	server.listen(3000, (err) => {
		if (err) throw err
		console.log('> Ready on http://localhost:3000')
	})
})
.catch((ex) => {
	console.error(ex.stack)
	process.exit(1)
})