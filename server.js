const express = require('express')
const path = require('path')
var cors = require('cors')
const spawn = require('child_process').spawn

spawn('python', ['sheets.py'], {cwd: path.join(__dirname, './docs/public/sheets/')})

const app = express()
app.use(cors())
const PORT = 3000

app.use('/', express.static('docs'))

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname + '/docs/index.html'))
})

console.log('*** \n\n\nRUNNING IN - ' + process.env.ENV + '\n\n\n***')
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

