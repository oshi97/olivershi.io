const express = require('express')
const path = require('path')
const serveIndex = require('serve-index')

const app = express()
const PORT = 3000

app.use('/dist', express.static('dist'))
app.use('/public', express.static('public'))
app.use('/sheets', express.static('public/sheets'), serveIndex('public/sheets', {'icons': true}))


app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
})

console.log('*** \n\n\nRUNNING IN - ' + process.env.ENV + '\n\n\n***')
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

