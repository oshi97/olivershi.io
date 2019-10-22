const express = require('express')
const path = require('path')
const serveIndex = require('serve-index')
const fs = require('fs')
const cors = require('cors')
const crypto = require('crypto');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// because windows is just a little bit special
if (process.env.NODE_ENV === undefined) {
  process.env.ENV = 'DEV'
  process.env.USERNAME = hash('user')
  process.env.PASSWORD = hash('pass')
} else {
  const dotenv = require('dotenv');
  dotenv.config();
  process.env.ENV = process.env.NODE_ENV
  if (!process.env.USERNAME || !process.env.PASSWORD) {
    console.log('***\n HI me, please set up your env file thanks \n ***')
  }
}

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())

function hash(message) {
  const hash = crypto.createHash('sha256')
  hash.update(message)
  return hash.digest('hex')
}


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

let SECRET = null
let token = null
let expirationDate = null

function hasValidCookie(cookies) {
  let tokenCopy = hash(cookies.expirationDate + SECRET)
  const isValidToken = tokenCopy === cookies.token
  const isFresh = (new Date(cookies.expirationDate) - Date.now()) > 0
  return isValidToken && isFresh
} 

function checkLogin(username, password) {
  return hash(username) === process.env.USERNAME && hash(password) === process.env.PASSWORD
}

// I think this is probably ok since I only see myself logging in to edit things basically forever
// But I should probably learn better ways to do this just for the sake of learning
app.post('/admin', (req, res) => {
  const { username, password } = req.body;
  if (hasValidCookie(req.cookies) || checkLogin(username, password)) {
    expirationDate = new Date(Date.now() + 21600000).toString()
    SECRET = hash(Math.random().toString(36).substring(7))
    token = hash(expirationDate + SECRET);
    res.cookie('expirationDate', expirationDate, { maxAge: 21600000 })
    res.cookie('token', token, { maxAge: 21600000 })
    res.sendFile(path.join(__dirname + '/public/admin.html'))
  } else {
    res.sendFile(path.join(__dirname + '/public/login.html'))
  }
})

app.get('/admin*', (req, res) => {
  if (hasValidCookie(req.cookies)) {
    res.sendFile(path.join(__dirname + '/public/admin.html'))
  } else {
    res.sendFile(path.join(__dirname + '/public/login.html'))
  }
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

console.log('*** \n\n\nRUNNING IN - ' + process.env.ENV + '\n\n\n***')
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

