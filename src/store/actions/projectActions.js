export const createProject = (project) => {

    // thunk functions take 2 arguments (dispatch, getState)
    // dispatch: to send an action to the reducer,
    // getState: to get the state from store
    // { getFirestore, getFirebase } : to provide binding to firebase service, firestore db 
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        // perform async task
        // get a reference to our firestore db
        // then using collection to select our projects (collection) in firestore
        // then using add function to add new project (new document) to it
        const firestore = getFirestore();

        // grab profile info from state object
        const profile = getState().firebase.profile;
        // grab uid from state object
        const authorId = getState().firebase.auth.uid;

        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createAt: new Date()
            
        })
        // this asyn task it will return a promise
        // this function will fire when adding data to db complete
        .then( ()=> {
            // continue dispatch (action, payload) to projectReducer
            dispatch({ type: 'CREATE_PROJECT', project })
        })
        // handle case if adding data to db not completed
        .catch( (error)=> {
            // continue dispatch (action, payload) to projectReducer
            dispatch({ type: 'CREATE_PROJECT_failed', error })
        })
        console.log(typeof(firestore), firestore);
        
    }
}