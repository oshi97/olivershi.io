const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)

const requiredString = {
	type: String,
	required: true
}

const CategorySchema = mongoose.Schema({
	id: {
		// set this to mongoose
		type: Number,
		required: true,
		// TODO need to make IDs unique somehow but still readable
		index: true,
		unique: true
	}, 
	name: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	}
})

// const PostSegmentSchema = mongoose.Schema({
// 	text: {
// 		type: String,
// 		index: true
// 	},
// 	image: String
// });

const CommentSchema = mongoose.Schema(
	{
		author: requiredString,
		text: requiredString
	},
	{
		timestamps: true
	}
);

const PostSchema = mongoose.Schema(
	{
		text: {
			// type: [PostSegmentSchema],
			// default: undefined
			type: String,
			index: true
		}, 
		comments: [CommentSchema],
		preview: String,
		title: requiredString,
		tags: [String],
		category: {
			type:CategorySchema,
			required: true
		}, 
		id: {
			type: Number,
			index: true,
			required: true,
			unique: true
		}
	}, 
	{
		timestamps: true
	}
);

module.exports.Category = mongoose.model('Category', CategorySchema);
module.exports.Post = mongoose.model('Post', PostSchema);
module.exports.Comment = mongoose.model('Comment', CommentSchema);
// module.exports.PostSegment = mongoose.model('PostSegmentSchema', PostSegmentSchema);