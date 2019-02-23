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
        // get an object representing the document
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


/*
* Cloud Functions for Firebase SDK exports a functions.firestore object 
* that allows you to create handlers tied to specific events
*/
// function calls userJoined every time a new user is sign up
exports.userJoined = functions.firestore.document("users/{uid}")
    // trigger a function to fire any time a new user document is created in a users collection
    // by using an onCreate() handler 
    .onCreate((doc) => {

        // get an object representing the document
        const newUser = doc.data();

        // create a notification object
        const notification = {
            content: 'Joined the app',
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        };

        // return as this function expects some response to end
        // add notification to notifications collection
        return createNotification(notification);

    });


/*
* trigger Cloud Functions in response to the creation and deletion
* of Firebase user accounts via Firebase Authentication triggers
* https://firebase.google.com/docs/functions/auth-events
* create a function that triggers when a Firebase user is created 
* using the functions.auth.user().onCreate() event handler
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
* this approch give me error 'TypeError: Cannot read property 'firstName' of undefined'
* to solve this issue using `Cloud Firestore triggers` instead of `Firebase Authentication triggers`
* https://stackoverflow.com/questions/54295827/cannot-read-property-firstname-of-undefined-at-admin-firestore-collection-doc?noredirect=1#comment95412375_54295827
* to get new cloud function worked
* delete the old function by using `firebase functions:delete userJoined`
* then deploy again
*/

// exports.userJoined = functions.auth.user()
//     .onCreate((user) => {
//         return admin.firestore().collection('users')
//             // getting user doc async request
//             .doc(user.uid).get().then(doc => {

//                 // get an object representing the document
//                 const newUser = doc.data();

//                 // create a notification object
//                 const notification = {
//                     content: 'Joined the app',
//                     user: `${newUser.firstName} ${newUser.lastName}`,
//                     time: admin.firestore.FieldValue.serverTimestamp()
//                 }

//                 // return as this function expects some response to end
//                 // add notification to notifications collection
//                 return createNotification(notification);
//             });
// })
