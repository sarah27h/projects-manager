import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return(
        <div className="card">
            <div className="card-content">
                <span className="card-title">project title : {id} </span>
                <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.
                </p>
            </div>
            <div class="card-action">
                <p>posted by Salma Allam</p>
                <p>1st October, 10am</p>
            </div>
        </div>
    )
}

export default ProjectDetails;