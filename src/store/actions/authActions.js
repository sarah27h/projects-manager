export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        // get instance from firebase 
        // to communicate with our firebase project and sign user in
        const firebase = getFirebase();
        // using firebase authentication service to sign in using (email, password)
        // async request to sign in user and check authertication
        // this take some time and return a promise
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
          ).then(() => {
                dispatch({ type: 'LOGIN_SUCCESS' });
          }).catch((error) => {
                dispatch({ type: 'LOGIN_FAILED', error });
          });
    }
}

export const signOut = () => {
      return (dispatch, getstate, {getFirebase}) => {
            const firebase = getFirebase();
            // using firebase authentication services to logout
            // send request to logout 
            firebase.auth().signOut().then(() => {
                  dispatch({ type: 'LOGOUT_SUCCESS' });
            })
      }
}

export const signUp = (newUser) => {
      return (dispatch, getState, { getFirebase, getFirestore }) => {
            // use it to signUp newUser using auth service
            const firebase = getFirebase();

            // use it to communicate with our firestore db
            // create a new document in users collection for each new user
            const firestore = getFirestore();

            // communicate with firebase and create this newUser
            // this async task take sometime return a promise
            firebase.auth().createUserWithEmailAndPassword(
                  newUser.email,
                  newUser.password
            // this response contain info about user store in response.user
            // use it to access user.uid to create a new doc for user in users collection
            ).then((response)=> {
                  // set some properties inside user doc
                  // async task return promise
                  return firestore.collection('users').doc(response.user.uid).set({
                        firstName: newUser.firstName,
                        lastName: newUser.lastName,
                        initials: newUser.firstName[0] + newUser.lastName[0]
                  })
            }).then(()=> {
                  dispatch({ type: 'SIGNUP_SUCCESS' });
            }).catch((error)=> {
                  dispatch({ type: 'SIGNUP_FAILED', error });
            })

      }
}