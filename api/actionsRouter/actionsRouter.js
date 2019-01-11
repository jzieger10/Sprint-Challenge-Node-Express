const express = require("express");

const actionModel = require("../../data/helpers/actionModel.js");

const router = express.Router();

router
	.route("/")
	.get((req, res) => {
		actionModel
			.get()
			.then(actions => {
				res.status(200).json({ actions });
			})
			.catch(res.status(500));
	})
	.post((req, res) => {
		let newPost = req.body;
		actionModel
			.insert(newPost)
			.then(actions => {
				res.status(201).json({ actions });
			})
			.catch(res.status(500));
	});

router
	.route("/:id")
	.get((req, res) => {
		const id = req.params.id;
		actionModel
			.get(id)
			.then(action => {
				res.status(201).json({ action });
			})
			.catch(res.status(500));
	})
	.put((req, res) => {
		const id = req.params.id;
		const changes = req.body;
		actionModel
			.update(id, changes)
			.then(count => {
				res.status(201).json({ count });
			})
			.catch(res.status(500));
	})
	.delete((req, res) => {
		const id = req.params.id;
		actionModel
			.remove(id)
			.then(count => {
				res.status(200).json({ count });
			})
			.catch(res.status(500));
	});

module.exports = router;
