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
	models.Category.find({}, (err, res) => {
  	fs.writeFileSync(static_url + 'categoryData.js','module.exports =' + JSON.stringify(res))
  })
}

function copyPostData() {
	models.Post.find({}, (err, res) => {
  	for (const i in res) {
  		post = res[i]
  		fs.writeFileSync(static_url + post.id + '.js', 'module.exports =' + JSON.stringify(post))
  	}
  })
}

async function myPrepare() {
	copyCategoryData()
	copyPostData()
}

// Server Code
app.prepare(
  myPrepare()
).then(() => {
  server.use(express.json())
  server.use(express.urlencoded({extended: true}))
  // These two must come before api require
  server.use(require('./api'))

  server.get('/post/:categoryName', (req, res) => {
    const queryParams = {categoryName: req.params.categoryName}
    app.render(req, res, '/categoryIndex', queryParams)
  })

  // TODO: make post id something related to date or at least make them unique to category but not necessarily
  // with each other i.e. different categories can all have a post 0
  // low priority
  server.get('/post/:categoryName/:postId', (req, res) =>{
  	const queryParams = {postId: req.params.postId}
  	app.render(req, res, '/post', queryParams)
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