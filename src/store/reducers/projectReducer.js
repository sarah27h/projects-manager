/* 
    add initState to pass as default value 
    so when app run first time use this as init value
*/
const initState = {
    projects: [
        {id: '1', title: 'Realstate project', content: 'I will use Reactjs, Redux, and a third party API to build a responsive front end for a real estate portal with an interactive map to view the placement of listings.'},
        {id: '2', title: 'React Get Weather app', content: 'a single page application from scratch to work as an interactive weather app built using React.js.'},
        {id: '3', title: 'Realstate project', content: 'I will use Reactjs, Redux, and a third party API to build a responsive front end for a real estate portal with an interactive map to view the placement of listings.'}
    ]
}

const projectReducer = (state=initState, action) => {
    // handle possible actions type
    switch(action.type) {
        case 'CREATE_PROJECT': 
            console.log('CREATE_PROJECT', action.project);
            return state;
        case 'CREATE_PROJECT_failed': 
            console.log('CREATE_PROJECT_failed', action.error);
            return state;
        default:
            return state;
    }
    
    return state;
}

export default projectReducer;