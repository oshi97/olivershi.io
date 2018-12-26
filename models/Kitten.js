// For testing the db
const mongoose = require('mongoose');
var kittySchema= new mongoose.Schema({
	name: String
});
kittySchema.methods.speak = function() {
	var greeting = this.name
		? "Meow name is " + this.name
		: "Me no have name";
	console.log(greeting);
}
var Kitten = mongoose.model('Kitten', kittySchema);
module.exports.Kitten = Kitten