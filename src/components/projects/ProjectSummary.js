import React from 'react';

const ProjectSummary = ({project}) => {
    console.log(project)
    return (
        <div className="card">
            <div className="card-content">
                <span className="card-title">{project.title}</span>
                <p>posted by {project.authorFirstName} {project.authorLastName}</p>
                <p>1st October, 10am</p>
            </div>
        </div>
    )
}

export default ProjectSummary;