import React from 'react';

const ProjectSummary = ({project}) => {
    console.log(project);
    let options = { year: 'numeric', month: 'short', day: 'numeric' };
    return (
        <div className="card">
            <div className="card-content">
                <span className="card-title">{project.title}</span>
                <p>posted by {project.authorFirstName} {project.authorLastName}</p>
                <p>{project.createAt.toDate().toDateString()}</p>
            </div>
        </div>
    )
}

export default ProjectSummary;