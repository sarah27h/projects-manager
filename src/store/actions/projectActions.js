export const createProject = (project) => {

    // thunk functions take 2 arguments (dispatch, getState)
    // dispatch: to send an action to the reducer,
    // getState: to get the state from store
    return (dispatch, getState) => {
        // perform async task
        // here.....
        // continue dispatch action to projectReducer
        dispatch({
            type: 'CREATE_PROJECT',
            project
        })
    }
}