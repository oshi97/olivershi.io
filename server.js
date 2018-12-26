const express = require('express')
const next = require('next')
const mongoose = require('mongoose')
const models = require('./db-import.js')
// I think we shouldn't need to interact with db except in the api
// I lied

const server = express()
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

mongoose.connect('mongodb://localhost/blogtest', {useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

models.Post.countDocuments({}, (err, count) => {
  console.log(`from server counted ${count}`)
})
models.Post.find({}).countDocuments((err, count) => {
  console.log((`two from server counted ${count}`))
})

// Server Code
app.prepare()
.then(() => {
  server.use(express.json())
  server.use(express.urlencoded({extended: true}))
  // These two must come before api require
  server.use(require('./api'))

  server.get('/posts/:categoryId', (req, res) => {
    const queryParams = {categoryId: req.params.categoryId}
    app.render(req, res, '/categoryIndex', queryParams)
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