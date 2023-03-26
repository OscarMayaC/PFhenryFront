import { GET_AVAILABLE_TABLES } from '../actions/actionTypes.js'

const initalState = {
    tables: [],
}

function rootReducer(state = initalState, action) {
   switch(action.type){
    case GET_AVAILABLE_TABLES:
        return{
            ...state,
            tables: action.payload
        };
    default:
        return state
   }
};

export default rootReducer