const express = require('express')
const path = require('path')
const serveIndex = require('serve-index')
const fs = require('fs')
const cors = require('cors')

const app = express()
const PORT = 3000

let whitelist = ['https://olivershi.io', 'http://localhost:3000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

if (!fs.existsSync(path.join(__dirname + '/posts'))) {
  fs.mkdirSync(path.join(__dirname + '/posts'))
}

app.use('/dist', express.static('dist'))
app.use('/public/images', express.static('public/images'))
app.use('/public/sheets', express.static('public/sheets'), serveIndex('sheets', {'icons': true}))

app.get('/admin*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/admin.html'))
})

app.get('/api/posts/:postId', cors(corsOptions), (req, res) => {
  const postId = req.params['postId']
  fs.readFile('posts/' + postId + '.json', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data))
  })
})

app.post('/api/posts', cors(corsOptions), (req, res) => {
  let post = {
    date: '10/19',
    content: 'test test testest'
  }

  let data = JSON.stringify(post, null, 2);
  fs.writeFile(path.join(__dirname + '/posts/student-' + Math.random() + '.json'), data, (err) => {
      if (err) {
        res.send('failed')
        console.log('failed')
      }
      else {
        res.send('success')
        console.log('success')
      }
  })
})

app.get('/api*', cors(corsOptions), (req, res) => {
  res.send('You hit the api but didn\'t specify a method')
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
})

// because windows is just a little bit special
if (process.env.NODE_ENV === undefined) {
  process.env.ENV = 'DEV'
} else {
  process.env.ENV = process.env.NODE_ENV
}
console.log('*** \n\n\nRUNNING IN - ' + process.env.ENV + '\n\n\n***')
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

