const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logitem = require("./models/logitem");

let app = express();

app.use(bodyParser.json());

const mongo_user = process.env.MONGOCLOUD_USER;
const mongo_password = process.env.MONGOCLOUD_PASSWORD;
const mongo_url = process.env.MONGOCLOUD_URL;

mongoose.connect("mongodb+srv://"+mongo_user+":"+mongo_password+"@"+mongo_url+"/webshoppinglog?retryWrites=true&w=majority").then(
	() => console.log("Connected to mongoDB"),
	(error) => console.log("Failed to connect to mongodb. Reason:",error)
)

app.get("/hoclog",function(req,res) {
	let query = {};
	if(req.query.tag) {
		query["tag"] = req.query.tag;
	}
	if(req.query.severity) {
		query["severity"] = req.query.severity;
	}
	if(req.query.date) {
		query["date"] = {"$gt":req.query.date}
	}
	logitem.find(query,function(err,items) {
		if(err) {
			console.log("Failed to find logs. Reason:",err);
			return res.status(500).json({message:"database failure"});
		}
		return res.status(200).json(items);
	})
})


app.post("/hoclog",function(req,res) {
	let now = Date.now();
	if(!req.body) {
		return res.status(401).json({message:"incomplete log"});
	}
	if(!req.body.severity) {
		return res.status(401).json({message:"incomplete log"});
	}
	if(!req.body.tag) {
		return res.status(401).json({message:"incomplete log"});
	}
	let templog = new logitem({
		severity:req.body.severity,
		tag:req.body.tag,
		desc:req.body.desc,
		date:now
	})
	templog.save(function(err) {
		if(err) {
			console.log("Failed to save log. Reason:",err)
		}
		return res.status(201).json({message:"logged"});
	})
})
app.listen(3002);
console.log("Running in port 3002");