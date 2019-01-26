/* 
    import reducers to combine into 
    one reducer using combineReducers 
*/
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';

// reducer used for syncing our firestore data to our state
import { firestoreReducer } from 'redux-firestore'

// reducer used for syncing firebase info including authentication to our state
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;