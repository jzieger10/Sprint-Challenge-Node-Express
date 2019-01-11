import React from "react";
import axios from "axios";
import styled from "styled-components";

class ActionList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            actions: [],
		};
	}

	componentDidMount() {
		axios
			.get(`http://localhost:5000/projects/${this.props.match.params.id}`)
			.then(res => {
				console.log("Project > Server Response: ", res);
				this.setState({
                    actions: res.data.project.actions
				});
			})
			.catch(err => console.log("Project > Server Error: ", err));
	}

	render() {
		return (
			<div>
				<div className="actions-container">
                    
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

export default ActionList;
