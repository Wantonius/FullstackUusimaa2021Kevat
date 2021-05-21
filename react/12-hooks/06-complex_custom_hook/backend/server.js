const express = require("express");
const bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.json());

//DATABASE

let database = [];
let id = 100;

//REST API

app.get("/api/shopping",function(req,res) {
	return res.status(200).json(database);
})

app.post("/api/shopping",function(req,res) {
	let item = {
		...req.body,
		id:id
	}
	id++;
	database.push(item);
	return res.status(201).json({message:"success!"});
})

app.delete("/api/shopping/:id",function(req,res) {
	let tempId = parseInt(req.params.id,10);
	for(let i=0;i<database.length;i++) {
		if(database[i].id === tempId) {
			database.splice(i,1);
			return res.status(200).json({message:"success!"})
		}
	}
	return res.status(404).json({message:"not found"});
})

app.put("/api/shopping/:id",function(req,res) {
	let tempId = parseInt(req.params.id,10);
	let item = {
		...req.body,
		id:tempId
	}
	for(let i=0;i<database.length;i++) {
		if(database[i].id === tempId) {
			database.splice(i,1,item);
			return res.status(200).json({message:"success!"})
		}
	}
	return res.status(404).json({message:"not found"});
})

app.listen(3001);
console.log("Running in port 3001");