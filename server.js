const express = require('express')
const next = require('next')
const mongoose = require('mongoose')
const models = require('./db-import.js')
const fs = require('fs')

const server = express()
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

mongoose.connect('mongodb://localhost/blogtest', {useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const static_url = './static/data/'
function copyCategoryData() {
	console.log(" ---- writing category data")
	models.Category.find({})
	.select('id name url -_id')
	.exec((err, res) => {
		fs.writeFileSync(static_url + 'categoryData.js','module.exports =' + JSON.stringify(res))
	})
}

async function myPrepare() {
	copyCategoryData()
}

// Server Code
app.prepare(
	myPrepare()
).then(() => {
	server.use(express.json())
	server.use(express.urlencoded({extended: true}))
	server.use(require('./api'))

	server.get('/about', (req, res) => {
		app.render(req, res, '/about', {})
	})

	server.get('/:categoryUrl', (req, res) => {
		const queryParams = {categoryUrl: req.params.categoryUrl}
		app.render(req, res, '/categoryIndex', queryParams)
	})

	server.get('/:categoryUrl/:postUrl', (req, res) => {
		const queryParams = {postUrl: req.params.postUrl}
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