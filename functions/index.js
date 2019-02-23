// import Cloud Functions module for Firebase SDK to create Cloud Functions and setup triggers
const functions = require('firebase-functions');

// import Firebase Admin SDK module to access the Firebase Realtime Database
const admin = require('firebase-admin');

// initialize an admin app instance to interact with different services 
// inside firebase like authentication, firestore
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

// add notification object as document inside notifications collection in firestore db
const createNotification = (notification => {
    return admin.firestore().collection('notifications')
        .add(notification)
        // when adding finish log this message
        .then(doc => console.log('notification is added', doc))
});


/*
* Cloud Functions for Firebase SDK exports a functions.firestore object 
* that allows you to create handlers tied to specific events
*/
// function calls projectCreated every time a new project is created
exports.projectCreated = functions.firestore
    .document('projects/{projectId}')
    // trigger a function to fire any time a new project is created in a projects collection
    // by using an onCreate() handler 
    .onCreate((docSnap) => {
        // Get an object representing the document
        const  project = docSnap.data();

        // create a notification object
        const notification = {
            content: `Added a new project`,
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        };

        // return as this function expects some response to end
        return createNotification(notification);
    });
