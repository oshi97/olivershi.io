const express = require('express')
const path = require('path')
var cors = require('cors')
const spawn = require('child_process').spawn

spawn('python', ['sheets.py'])

const app = express()
app.use(cors())
const PORT = 3000

app.get('/index.css', (_, res) => {
  res.sendFile(path.join(__dirname, '..', 'docs/index.css'))
})

app.get('/dev-bundle.js', (_, res) => {
  res.sendFile(path.join(__dirname, 'dev-bundle.js'))
})

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'dev.html'))
})

app.use('/', express.static(path.join(__dirname, '..', 'docs')))

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'dev.html'))
})

console.log('*** \n\n\nRUNNING IN - ' + process.env.ENV + '\n\n\n***')
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))