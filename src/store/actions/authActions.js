export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        // get instance from firebase 
        // to communicate with our firebase project and sign user in
        const firebase = getFirebase();
        // using firebase authertication service to sign in using (email, password)
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