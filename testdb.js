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
    id: 0
  })

  testPost.save((err, post) => {
    console.log("Saved: ", post)
  })
}

function createCategory() {
  var testCategory = new models.Category({
    id: 0,
    name: "testCategoryName"+0,
    url: "testCategoryName"+0,
    posts: []
  })

  testCategory.save((err, category) => { console.log("Saved: ", category) })
}

async function pushPostAndSave() {
  var testPost = await models.Post.findOne({id: 0}).exec()
  console.log("wtf")
  console.log("pushing post - ", testPost)
  console.log("ID = ", testPost._id)
  var testCategory = await models.Category.findOne({id: 0}).exec()
  console.log(testCategory)
  testCategory.posts.push(testPost)
  console.log("post pushed", testCategory)
  testCategory.save((err, category) => { console.log("Saved: ", category)})
}

db.once('open', () => {
// createPost()
// createCategory()
  pushPostAndSave()
})