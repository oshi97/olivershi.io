const express = require('express')
const path = require('path')
const serveIndex = require('serve-index')
const fs = require('fs')
const cors = require('cors')
// var jwt = require('jsonwebtoken')
const OktaJwtVerifier = require('@okta/jwt-verifier');

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: 'https://dev-399526.okta.com/oauth/default',
  clientId: '0oa1mjxcan6UcUNCB357',
  assertClaims: {
    aud: 'api://default',
  },
});

/**
 * A simple middleware that asserts valid access tokens and sends 401 responses
 * if the token is not present or fails validation.  If the token is valid its
 * contents are attached to req.jwt
 */
function authenticationRequired(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    return res.status(401).end();
  }

  const accessToken = match[1];
  const expectedAudience = 'api://default';

  return oktaJwtVerifier.verifyAccessToken(accessToken, expectedAudience)
    .then((jwt) => {
      req.jwt = jwt;
      next();
    })
    .catch((err) => {
      res.status(401).send(err.message);
    });
}

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

// app.get('/admin', cors(corsOptions), authenticationRequired, (req, res) => {
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/admin.html'))
});

app.get('/api/posts/:postId', cors(corsOptions), (req, res) => {
  const postId = req.params['postId']
  fs.readFile('posts/' + postId + '.json', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data))
  })
})

app.post('/api/posts', cors(corsOptions), authenticationRequired, (req, res) => {
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

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))