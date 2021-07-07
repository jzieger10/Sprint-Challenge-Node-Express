import React from "react";
import styled from "styled-components";

const ProjectListContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	width: 60%;
	margin: 60px auto;

	h1 {
		width: 100%;
	}

	a {
		border: 2px solid darkgray;
		padding: 10px;
		margin: 20px;
		text-decoration: none;
		color: #333;

		&:hover {
			border: 2px dashed darkblue;
			background-color: #eaeaea;
		}

		.project-card {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			width: 400px;
			height: 200px;

			h4 {
				width: 100%;
			}
		}
	}
`;

const ProjectList = props => {
	return (
		<ProjectListContainer>
			<h1>Project List</h1>
			{props.projects.map(project => (
				<a href={`projects/${project.id}`} key={project.id}>
					<div className="project-card" >
						<h4>Project #{project.id}</h4>
						<h3>{project.name}</h3>
					</div>
				</a>
			))}
		</ProjectListContainer>
	);
};

export default ProjectList;
