/* 
    add initState to pass as default value 
    so when app run first time use this as init value
*/
const initState = {}

const authReducer = (state=initState, action) => {
    return state;
}

export default authReducer;