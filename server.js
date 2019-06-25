const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.use('/dist', express.static('dist'))
app.use('/images', express.static('images'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))