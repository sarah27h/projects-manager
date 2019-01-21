import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// to apply thunk we need applyMiddleware
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/rootReducer';
/* use Provide component to bind redux with our react app*/
import { Provider } from 'react-redux';

/*import thunk middleware*/
import thunk from 'redux-thunk';

/* import extra arguments for thunk to use inside action creator  */
import { getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';

// create a store and pass rootReducer into it
// createStore second arguments is the "store enhancer"
// use applyMiddleware to apply the thunk middleware to our store.
// use withExtraArgumet to pass extra arguments for thunk function
// to provide binding to firebase service, firestore db 
const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })));

ReactDOM.render(<Provider store={store}> <App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
