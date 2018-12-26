// imports as module.exports.filename.objectname into server.js
// so a Kitten model defined in kitty.js would be module.exports.kitty.Kitten
// The namespacing might be cumbersome in the long run but I started writing 
// this script and well I think it still might be useful so I'll try it for a bit
// nevermind removing namespacing it feels stupid af especially for this sort of project

if (!fs) var fs = require('fs');
var models_path = __dirname + '/models'
console.log(`--- importing mongoose schemas from ${models_path}--- \n`)
var schemas = fs.readdirSync(models_path)
for (var i in schemas) {
	module_name = [schemas[i].split('.')[0]] //filename with .js part removed
	const models = require(models_path + '/' + schemas[i])
	for (var modelname in models) {
		module.exports[modelname] = models[modelname]
		console.log(`imported ${modelname}`)
	}

}