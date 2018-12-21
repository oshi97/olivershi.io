const express = require('express'), path = require('path')

const app = express()

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/piwik', express.static(path.join(__dirname, 'piwik')))

app.get('/', (req, res) => {
  res.send('Currently migrating site to use node + react + mongo pie3')
})

app.get('')

app.listen(3000, () => console.log('Server running on port 3000'))
