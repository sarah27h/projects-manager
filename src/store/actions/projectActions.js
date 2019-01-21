export const createProject = (project) => {

    // thunk functions take 2 arguments (dispatch, getState)
    // dispatch: to send an action to the reducer,
    // getState: to get the state from store
    // { getFirestore, getFirebase } : to provide binding to firebase service, firestore db 
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        // perform async task
        // here.....
        // continue dispatch action to projectReducer
        dispatch({
            type: 'CREATE_PROJECT',
            project
        })
    }
}