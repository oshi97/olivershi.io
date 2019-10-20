const express = require('express')
const path = require('path');
const serveIndex = require('serve-index')
const fs = require('fs');
const app = express()
const port = 3000

if (!fs.existsSync(path.join(__dirname + '/posts'))) {
  fs.mkdirSync(path.join(__dirname + '/posts'))
}

app.use('/dist', express.static('dist'))
app.use('/public/images', express.static('public/images'))
app.use('/public/sheets', express.static('public/sheets'), serveIndex('sheets', {'icons': true}))

app.get('/api/posts/:postId', (req, res) => {
  const postId = req.params['postId']
  fs.readFile('posts/' + postId + '.json', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data))
  })
})

app.post('/api/posts', (req, res) => {
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

app.get('/api*', (req, res) => {
  res.send('You hit the api but didn\'t specify a method')
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))