const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)
const Schema = mongoose.Schema

const requiredString = {
	type: String,
	required: true
}

const CategorySchema = Schema({
	id: {
		type: Number,
		// required: true,
		// index: true,
		// unique: true
	}, 
	name: {
		type: String,
		// required: true,
		// unique: true
	},
	url: {
		type: String,
		// required: true,
		// unique: true
	},
	posts: [{
		type: Schema.Types.ObjectId,
		ref: 'Post',
	}],

})

// const CommentSchema = Schema(
// 	{
// 		author: requiredString,
// 		text: requiredString
// 	},
// 	{
// 		timestamps: true
// 	}
// );

const PostSchema = Schema(
	{
		text: {
			type: String,
			// index: true
		}, 
		// comments: [CommentSchema],
		// preview: String,
		title: String,
		// tags: [String],
		category: {
			type:CategorySchema,
			// type: Schema.Types.ObjectId,
			// ref: 'Category',
		}, 
		id: {
			type: Number,
			// index: true,
			// required: true,
			// unique: true
		},
		url: String
	}, 
	{
		timestamps: true
	}
);

// CategorySchema.method('addNewPost', (post) => {
// 	console.log('maybe okay', post)
// 	const newPost = new Post(post)
// 	console.log('okay', newPost)
// })

CategorySchema.static('getNextId', () => {
	var newid = Category.countDocuments({}).exec().then((id) => {
		console.log('promised id = ',id)
		return id
	})
	// below code does not execute, cool!
	console.log('returned id is', newid)
	return newid
})

PostSchema.static('getNextId', () => {
	return Post.countDocuments({}).exec()
})

const Category = mongoose.model('Category', CategorySchema);
const Post = mongoose.model('Post', PostSchema)
module.exports.Category = Category;
module.exports.Post = Post
// module.exports.Comment = mongoose.model('Comment', CommentSchema);