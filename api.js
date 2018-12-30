const mongoose = require('mongoose')
const models = require('./db-import.js')
const router = require('express').Router()

function handleError(err) {
  console.log("ERROR - ", err)
  process.exit(1)
}

// Database Connection + import models
mongoose.connect('mongodb://localhost/blogtest', {useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

router.get('/api', (req, res) => {
  res.status(200).json(
  {
      response: 'you have hit the api!',
      body: req.body
  })
})

router.get('/api/post/:id', (req, res) => {
  // return get data from mongoose here
  models.Post.find({id: req.params.id}, (err, post) => {
    res.status(200).json(
    {
      post: post,
      body: req.body
    })
  })
}) 

router.get('/api/category/:categoryUrl/postIds', (req, res) => {
  const categoryUrl = req.params.categoryUrl
  models.Category.findOne({url: categoryUrl})
    .populate('posts', '-post -_id')
    .exec((err, category) => {
      if (err) return handleError(err);
      console.log('api ', categoryUrl, 'for canonical postids returned ', category.posts)
      res.status(200).json({
        posts: category.posts
      })
    })  
})

router.get('/api/category/all', (req, res) => {
  models.Category.find({}, (err, categories) => {
      res.status(200).json({
        categories: categories,
        body: req.body,
    })
  })
})

router.post('/api/post/create', (req, res) => {
  console.log(req.body)
  res.status(200).end("ok!")
  // TODO: add in rtf editor (WYSIWYG), add in ajax to export it to db
})

module.exports = router