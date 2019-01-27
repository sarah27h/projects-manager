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
        default:
            return {
                state
            }
    }
    return state;
}

export default authReducer;