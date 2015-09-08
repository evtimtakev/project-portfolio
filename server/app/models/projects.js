// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('projects', {
    name : {type : String, default: ''},
	url : {type : String,default: ''},
	description : {type : String, default: ''},
	img : {type: String,default: ''}
});
