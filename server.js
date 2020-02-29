const express = require('express')
var fs = require('fs')
const path = require('path')
var cors = require('cors')
var https = require('https')
const spawn = require('child_process').spawn

spawn('python', ['sheets.py'])

const app = express()
app.use(cors())
const PORT = 3000

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname + '/docs/dev.html'))
})

app.get('/index.css', (_, res) => {
  res.sendFile(path.join(__dirname + '/docs/index.css'))
})

app.get('/dev-bundle.js', (_, res) => {
  res.sendFile(path.join(__dirname + '/dev-bundle.js'))
})

app.use('/', express.static('docs'))

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname + '/docs/dev.html'))
})

console.log('*** \n\n\nRUNNING IN - ' + process.env.ENV + '\n\n\n***')
https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app).listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))