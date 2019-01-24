/* 
    import reducers to combine into 
    one reducer using combineReducers 
*/
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';

// reducer used for syncing our firestore data to our state
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer
})

export default rootReducer;