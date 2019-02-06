/* 
    add initState to pass as default value 
    so when app run first time use this as init value
*/
const initState = {
    authError: null
}

const authReducer = (state=initState, action) => {
    // handle actions in authRducer
    switch(action.type) {
        case 'LOGIN_SUCCESS' :
            console.log('LOGIN_SUCCESS');
            return {
                ...state, authError: null
            }
        case 'LOGIN_FAILED' :
            console.log('LOGIN_FAILED');
            return {
                ...state, authError: 'Login failed :('
            }
        case 'LOGOUT_SUCCESS' :
            console.log('LOGOUT_SUCCESS')
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('SIGNUP_SUCCESS', state);
            return {
                ...state, authError: null
            }
        case 'SIGNUP_FAILED':
            console.log('SIGNUP_FAILED', action.error);
            return {
                ...state, authError: action.error.message
            }

        default:
            return {
                state
            }
    }
    return state;
}

export default authReducer;