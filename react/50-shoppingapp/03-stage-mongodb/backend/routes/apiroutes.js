const express = require("express");
const mongoose = require("mongoose");
const itemModel = require("../models/item");

let router = express.Router();

//REST API

router.get("/shopping",function(req,res) {
	let query = {"user":req.session.user}
	itemModel.find(query,function(err,items) {
		if(err) {
			console.log("Failed to find items. Reason:",err);
			return res.status(500).json({message:"Internal server error"})
		}
		return res.status(200).json(items);
	})
})

router.post("/shopping",function(req,res) {
	if(!req.body) {
		return res.status(400).json({message:"Bad request"});
	}
	if(!req.body.type) {
		return res.status(400).json({message:"Bad request"});
	}
	let item = new itemModel({
		user:req.session.user,
		type:req.body.type.toLowerCase(),
		count:req.body.count,
		price:req.body.price
	})
	item.save(function(err) {
		if(err) {
			console.log("Failed to save item. Reason:",err);
			return res.status(500).json({message:"Internal server error"})
		}
		return res.status(201).json({message:"success!"});
	})
})

router.delete("/shopping/:id",function(req,res) {
	itemModel.deleteOne({"_id":req.params.id,"user":req.session.user},function(err) {
		if(err) {
			console.log("Failed to remove item. Reason:",err);
			return res.status(500).json({message:"Internal server error"})
		}
		return res.status(200).json({message:"success!"})
	})
})

router.put("/shopping/:id",function(req,res) {
	if(!req.body) {
		return res.status(400).json({message:"Bad request"});
	}
	if(!req.body.type) {
		return res.status(400).json({message:"Bad request"});
	}
	let item = {
		type:req.body.type.toLowerCase(),
		count:req.body.count,
		price:req.body.price,
		user:req.session.user
	}
	itemModel.replaceOne({"_id":req.params.id,"user":req.session.user},item,function(err,item) {
		if(err) {
			console.log("Failed to edit item. Reason:",err);
			return res.status(500).json({message:"Internal server error"})
		}
		if(!item) {
			return res.status(404).json({message:"not found"});
		}
		return res.status(200).json({message:"success!"});
	})
})

module.exports = router;