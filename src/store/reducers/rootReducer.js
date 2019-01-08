/* 
    import reducers to combine into 
    one reducer using combineReducers 
*/
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
})

export default rootReducer;