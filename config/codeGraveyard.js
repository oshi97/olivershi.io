function copyPostData() {
	models.Post.find({}, (err, res) => {
  	for (const i in res) {
  		post = res[i]
  		fs.writeFileSync(static_url + post.id + '.js', 'module.exports =' + JSON.stringify(post))
  	}
  })
}