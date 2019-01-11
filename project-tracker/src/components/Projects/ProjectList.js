import React from 'react';
import styled from 'styled-components';

const ProjectListContainer = styled.div`

`

const ProjectList = props => {
    return (
        <ProjectListContainer>
            {props.projects.map( project => (
                <a href={`projects/${project.id}`}>{project.name}</a>
            ))}
        </ProjectListContainer>
    )
}

export default ProjectList;