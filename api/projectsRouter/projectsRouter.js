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
		if (
			req.body.name &&
			req.body.name.length <= 128 &&
			req.body.description
		) {
			projectModel
				.insert(newPost)
				.then(projects => {
					res.status(201).json({ projects });
				})
				.catch(
					res
						.status(500)
						.json({ Error: "Project POST > Server error" })
				);
		} else {
			res.status(400).json({
				Error:
					"You must include a name for this project that is shorter than 128 characters as well as a description",
				Status_Code: 400,
			});
		}
	});

router
	.route("/:id")
	.get((req, res) => {
		const id = req.params.id;
		if (id) {
			projectModel
				.get(id)
				.then(project => {
					res.status(201).json({ project });
				})
				.catch(
					res
						.status(500)
				);
		} else {
			res.status(404).json({
				Error: "The requested ID cannot be found",
				Status_Code: 404,
			});
		}
	})
	.get((req, res) => {
		const id = req.params.id;
		if (id) {
			projectModel
				.getProjectActions(id)
				.then(project => {
					res.status(201).json({ project });
				})
				.catch(
					res
						.status(500)
						.json({ Error: "Project id GET > Server Error" })
				);
		} else {
			res.status(404).json({
				Error: "The requested ID cannot be found",
				Status_Code: 404,
			});
		}
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
