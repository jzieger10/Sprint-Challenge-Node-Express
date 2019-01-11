const express = require("express");

const projectModel = require("../../data/helpers/projectModel.js");

const router = express.Router();

router
	.route("/")
	.get((req, res) => {
		projectModel
			.get()
			.then(projects => {
				res.status(200).json({ projects });
			})
			.catch(res.status(500));
	})
	.post((req, res) => {
		let newPost = req.body;
		projectModel
			.insert(newPost)
			.then(projects => {
				res.status(201).json({ projects });
			})
			.catch(res.status(500));
	});

router
	.route("/:id")
	.get((req, res) => {
		const id = req.params.id;
		projectModel
			.get(id)
			.then(project => {
				res.status(201).json({ project });
			})
			.catch(res.status(500));
    })
    .get((req, res) => {
		const id = req.params.id;
		projectModel
			.getProjectActions(id)
			.then(project => {
				res.status(201).json({ project });
			})
			.catch(res.status(500));
	})
	.put((req, res) => {
		const id = req.params.id;
		const changes = req.body;
		projectModel
			.update(id, changes)
			.then(count => {
				res.status(201).json({ count });
			})
			.catch(res.status(500));
	})
	.delete((req, res) => {
		const id = req.params.id;
		projectModel
			.remove(id)
			.then(count => {
				res.status(200).json({ count });
			})
			.catch(res.status(500));
	});

module.exports = router;
