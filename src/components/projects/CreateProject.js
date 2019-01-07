import React, { Component } from 'react';

class CreateProject extends Component {
    
    state = {
        title: '',
        content: ''
    }

    render() {
        return(
            <div className="container">
                <h5>Create New Project</h5>
                <form onSubmit={this.handleSubmit} className="col s12 m6">
                    <div className="row">
                        <div className="input-field col s12">
                        <input 
                            id="title" 
                            type="text" 
                            className="validate" 
                            value={this.state.title} 
                        />
                        <label htmlFor="title">Project Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <textarea 
                            id="content" 
                            className="materialize-textarea"
                            value={this.state.content} >
                        </textarea>
                        <label htmlFor="content">Project Content</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn waves-effect waves-light" type="submit" name="action">
                            Create
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProject;