const mongoose = require('mongoose');
const models = require('./db-import.js')

mongoose.connect('mongodb://localhost/blogtest', { useNewUrlParser: true});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));


function handleError(err) {
  console.log("ERROR - ", err)
  process.exit(1)
}

function createPost() {
  var testPost = new models.Post({
    text: "THIS IS THE TEXT",
    id: 1,
    url: "niceurl"
  })

  return testPost
}

function getPost(id) {
  var post = models.post.findOne({id: id}).exec()
  .then((post) => {return post})
  }

// Should have returned a promise here if we wanted the original way or breaking up things
function createCategoryAndSave() {
  models.Category.countDocuments({}, (err, count)=>{
    var testCategory = new models.Category({
      id: count,
      name: "testCategory",
      url: "testCategory",
      posts: []
    })
    return testCategory
  })
}

function quicksave(data) {
  data.save((err, dat) => { console.log("Saved: ", dat) })
}

async function pushPostAndSave() {
  var testPost = await models.Post.findOne({id: 0}).exec()
  console.log("wtf")
  console.log("pushing post - ", testPost)
  console.log("ID = ", testPost._id)
  var testCategory = await models.Category.findOne({id: 0}).exec()
  console.log('test category', testCategory)
  testCategory.posts.push(testPost)
  console.log("post pushed", testCategory)
  testCategory.save((err, category) => { console.log("Saved: ", category)})
}

function addNewPost(post, category) {
  category.posts.push(post)
  post.category = category
}

function prettyPrint(post, category) {
  console.log('----\n',post, '\n\n\n', category, '\n----')
}

db.once('open', () => {
  var post = createPost()
  var category = createCategory()
  quicksave(category)
  prettyPrint(post, category)
  // pushPostAndSave()
  // addNewPost(post, category)
  // prettyPrint(post, category)
  // quicksave(post)
  // quicksave(category)
})