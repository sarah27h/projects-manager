// Initialize Firebase

// import base features of firebase library
import firebase from 'firebase/app';

// import db
import 'firebase/firestore'

// import auth to use when working with authentication
import 'firebase/auth'

// config object contain info about our firebase project
var config = {
    apiKey: "AIzaSyCms-kArZGks7wyAWub8cpnywiY8JYoWNU",
    authDomain: "project-manager-7b746.firebaseapp.com",
    databaseURL: "https://project-manager-7b746.firebaseio.com",
    projectId: "project-manager-7b746",
    storageBucket: "project-manager-7b746.appspot.com",
    messagingSenderId: "929223811723"
};

// initialize Firebase app
firebase.initializeApp(config);

// initialize firestore
// timestampsInSnapshots: true to show how firebase works with timestamp
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase; 