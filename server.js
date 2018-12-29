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

// models.Post.countDocuments({}, (err, count) => {
//   console.log(`from server counted ${count}`)
// })
// models.Post.find({}).countDocuments((err, count) => {
//   console.log((`two from server counted ${count}`))
// })

function writeDbData() {
  models.Category.find({}, (err, post) => {
    // TODO change this to use string formatting to be clearer
    fs.writeFileSync('./static/data/categoryData.js','module.exports = '+JSON.stringify(post))
    console.log("wrote categoryData.js")
  })
}

// Server Code
app.prepare(
  writeDbData()
).then(() => {
  console.log("server starting")
  server.use(express.json())
  server.use(express.urlencoded({extended: true}))
  // These two must come before api require
  server.use(require('./api'))

  server.get('/posts/:categoryName', (req, res) => {
    const queryParams = {categoryName: req.params.categoryName}
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