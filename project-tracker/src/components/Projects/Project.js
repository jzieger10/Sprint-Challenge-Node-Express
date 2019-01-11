import React from "react";
import axios from "axios";
import styled from "styled-components";

class Project extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            project: {},
            actions: [],
		};
	}

	componentDidMount() {
		axios
			.get(`http://localhost:5000/projects/${this.props.match.params.id}`)
			.then(res => {
				console.log("Project > Server Response: ", res);
				this.setState({
                    project: res.data.project,
                    actions: res.data.project.actions
				});
			})
			.catch(err => console.log("Project > Server Error: ", err));
	}

	render() {
		return (
			<div>
				<div className="project-container">
                    <h1>Project Number {this.state.project.id}</h1>
                    <br />
					<h2>{this.state.project.name}</h2>

					<p>{this.state.project.description}</p>
					<br />
                    <h3>Actions:</h3>
					{this.state.actions.map(action => (
						<div className="action-container">
							<h4>{action.description}</h4>
							<p>{action.notes}</p>
							<p>{action.completed}</p>
                            <br/>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Project;
