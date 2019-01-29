import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// to apply thunk we need applyMiddleware
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
/* use Provide component to bind redux with our react app*/
import { Provider } from 'react-redux';

/*import thunk middleware*/
import thunk from 'redux-thunk';

// import extra arguments (getFirestore, getFirebase) for thunk to use inside action creator
// include reactReduxFirebase, reduxFirestore (store enhancer) 
// to connect project config file with our app
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './cofig/fbConfig';

// create a store and pass rootReducer into it
// createStore second arguments is the "store enhancer"
// use applyMiddleware to apply the thunk middleware to our store.
// use withExtraArgumet to pass extra arguments for thunk function
// to provide binding to firebase service, firestore db 
const store = createStore(rootReducer, 
    // use compose to combine store enhancers together
    // pass fbConfig file to firebase enhancer to connect project config file with our app
    // pass config option {attachAuthIsReady: true} to allow us access -firebaseAuthIsReady- method on store 
    // store.firebaseAuthIsReady allow us to prevent rendering to DOM until
    // 1- firebase authentication is initialized
    // 2- firebase can figure out we looged to app
    // note: if your firebase reducers name is different than firebase
    // you need to add reactReduxFirebase
    // (fbConfig, {attachAuthIsReady:true, firebaseStateName:'yourUniqueReducerNameGoesHere'})
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
        reactReduxFirebase(fbConfig, {attachAuthIsReady: true}),
        reduxFirestore(fbConfig)
    )
);

// fire callback func(and render to DOM) after firebase authentication is initialized
store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
})
