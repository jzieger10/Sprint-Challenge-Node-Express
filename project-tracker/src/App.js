import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import ProjectList from "./components/Projects/ProjectList";
import Project from "./components/Projects/Project";

class App extends Component {
	constructor() {
		super();
		this.state = {
			projects: [],
			actions: [],
		};
	}

	componentDidMount() {
		axios
			.get("http://localhost:5000/projects")
			.then(res => {
				console.log("Server Response :", res);
				this.setState({ projects: res.data.projects });
			})
			.catch(err => {
				console.log("App.js > Server Error: ", err);
			});
	}

	render() {
		return (
			<div className="App">
				<Route
					exact
					path="/projects"
					render={props => (
						<ProjectList
							{...props}
							projects={this.state.projects}
							deletePost={this.deletePost}
						/>
					)}
				/>

				<Route
					exact
					path="/projects/:id"
					render={props => (
						<Project
							{...props}
							projects={this.state.projects}
							id={this.props}
						/>
					)}
				/>
			</div>
		);
	}
}

export default App;
