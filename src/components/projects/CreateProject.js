import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

class CreateProject extends Component {
    
    state = {
        title: '',
        content: ''
    }

    // handle input change
    handleChange = (e) => {
        //use ES6 computed property to update key state
        // { [name]: value }
        this.setState({ [e.target.id] : e.target.value });
    }

    // handle user submit form
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="col s12 m6">
                    <h5>Create New Project</h5>
                    <div className="row">
                        <div className="input-field col s12">
                        <input 
                            id="title" 
                            type="text" 
                            className="validate" 
                            value={this.state.title} 
                            onChange={this.handleChange}
                        />
                        <label htmlFor="title">Project Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <textarea 
                            id="content" 
                            className="materialize-textarea"
                            value={this.state.content}
                            onChange={this.handleChange} >
                        </textarea>
                        <label htmlFor="content">Project Content</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn light-blue z-depth-0" type="submit" name="action">
                            Create
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

/* 
    dispatch createProject action inside this component
    this method return an object which props are attached
    to props of this component
    add createProject to props of this component
    so we can access them inside this component
*/
const mapDispatchToProps = (dispatch) => {
    return {
        // send action to reducer >> dispatch(createProject(project)
        createProject: (project) => dispatch(createProject(project))
    }
}

// pass mapDispatchToProps to connect
// so it know which data to get from store
export default connect(null, mapDispatchToProps)(CreateProject);