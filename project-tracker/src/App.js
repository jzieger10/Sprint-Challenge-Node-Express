import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import "./App.css";
import ProjectList from "./components/Projects/ProjectList";
import Project from "./components/Projects/Project";

const NavBar = styled.div`
	display: flex;
	flex-wrap: wrap;
  justify-content: flex-end;
	background-color: #0051cc;
	color: #fff;
	padding: 20px;

	a {
		color: #fff;
		font-size: 1.2rem;

		&:hover {
			text-decoration: none;
		}
	}
`;

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
				<NavBar>
					<a href="/projects">Project List</a>
				</NavBar>
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
