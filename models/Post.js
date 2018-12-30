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
		// title: requiredString,
		// tags: [String],
		category: {
			// type:CategorySchema,
			type: Schema.Types.ObjectId,
			ref: 'Category',
		}, 
		id: {
			type: Number,
			// index: true,
			// required: true,
			// unique: true
		}
	}, 
	{
		timestamps: true
	}
);
// CategorySchema.statics.getNextId = function() {
// 	var thisCount = 0;
// 	this.countDocuments({}, (err, count) => {
// 		if (err)  return handleError(err);
// 		thisCount = count
// 	})
// 	return thisCount
// }
const Category = mongoose.model('Category', CategorySchema);

module.exports.Category = Category;
module.exports.Post = mongoose.model('Post', PostSchema);
// module.exports.Comment = mongoose.model('Comment', CommentSchema);