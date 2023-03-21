import{ SEARCH_NAME, GET_DISHES, GET_TAGS, GET_SECTIONS, SORT, FILTER_BY_TAG,} from '../actions/index'

const initialState = {
allDishes:[],
allTags:[],
sections:[],
SearchDish:[],
Dishes:[]
}

function rootReducer(state = initialState, action) {
    switch (action.type) {

      case GET_SECTIONS:
        return {
          ...state,
          sections: action.payload,
        };

        case GET_DISHES:
          return {
            ...state,
            allDishes: action.payload,
          };
        
          case GET_TAGS:
            return {
              ...state,
              allTags: action.payload,
            };

          case SEARCH_NAME:
            return {
              ...state,
              SearchDish: action.payload 
            };
         
            case SORT:
              let orderedDishes = [...state.allDishes];
              orderedDishes = orderedDishes.sort((a, b) => {
                if (a.name < b.name) {
                  return action.payload === "ASCENDENTE" ? -1 : 1;
                }
                if (a.name > b.name) {
                  return action.payload === "ASCENDENTE" ? 1 : -1;
                }
                return 0; 
              });
        
              return {
                ...state,
                allDishes:
                  action.payload === "Filtro" ? state.allDishes : orderedDishes
              };


              case FILTER_BY_TAG:
                const allDishes = state.allDishes;
                const typeFiltered =
                  action.payload === "type"
                    ? allDishes
                    : allDishes.filter((e) => e.sectionId.includes(action.payload));
                return {
                  ...state,
                  Dishes: typeFiltered,
                };


            default:
            return state;
  
        }

}

export default rootReducer