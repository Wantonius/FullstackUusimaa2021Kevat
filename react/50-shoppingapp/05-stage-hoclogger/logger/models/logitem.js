const mongoose = require("mongoose");

// severity: LOG_DEBUG,LOG_INFO,LOG_WARN,LOG_ERROR,LOG_FATAL

let Schema = mongoose.Schema({
	severity:String,
	tag:{type:String,index:true},
	date:String,
	desc:String
})

module.exports = mongoose.model("Logitem",Schema);