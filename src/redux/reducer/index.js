const initalState = {
    users: [],
}

function rootReducer(state = initalState, action) {

    switch (action.type) {
        case "CREATE_USERS": 
            return {
                ...state
            }
    
        default:
            return state;
    }
   
}

export default rootReducer