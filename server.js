const express = require('express')
const path = require('path');
const serveIndex = require('serve-index')
const app = express()
const port = 3000

app.use('/dist', express.static('dist'))
app.use('/images', express.static('images'))
app.use('/sheets', express.static('sheets'), serveIndex('sheets', {'icons': true}))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))