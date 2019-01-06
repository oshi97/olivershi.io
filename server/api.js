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

// endpoint check
router.get('/api', (req, res) => {
  res.status(200).json(
  {
      response: 'you have hit the api!',
      body: req.body
  })
})

// Return all posts
router.get('/api/posts', (req, res) => {
  models.Post.find({}, (err, posts) => {
    res.status(200).json({
        posts: posts
    })
  })
})

router.get('/api/posts/url/:postUrl', (req, res) => {
	models.Post.findOne({url: req.params.postUrl}, (err, post) => {
    res.status(200).json({
      text: post.text,
      title: post.title,
      categoryOID: post.category,
      id: post.id,
      body: req.body
    })
  })
})

// Return post by a specific id
router.get('/api/posts/id/:id', (req, res) => {
  // return get data from mongoose here
  models.Post.findOne({id: req.params.id}, (err, post) => {
    res.status(200).json(
    {
      text: post.text,
      title: post.title,
      categoryOID: post.category,
      id: post.id,
      body: req.body
    })
  })
}) 

// Return all posts for a specific category
router.get('/api/categories/:categoryUrl/posts', (req, res) => {
  const categoryUrl = req.params.categoryUrl
  models.Category.findOne({url: categoryUrl})
    .populate('posts', 'id url title -_id')
    .exec((err, category) => {
      if (err) return handleError(err);
      res.status(200).json({
        posts: category.posts
      })
    })  
})


// Returns all categories
router.get('/api/categories', (req, res) => {
  models.Category.find({}, (err, categories) => {
      res.status(200).json({
        categories: categories,
        body: req.body,
    })
  })
})

// same as /api/categories
router.get('/api/categories/all', (req, res) => {
  models.Category.find({}, (err, categories) => {
      res.status(200).json({
        categories: categories,
        body: req.body,
    })
  })
})

// TODO create a post 
router.post('/api/post/create', (req, res) => {
  res.status(200).end("ok!")
  // TODO: add in rtf editor (WYSIWYG), add in ajax to export it to db
})

module.exports = router