import{ SEARCH_NAME, GET_DISHES, GET_TAGS, GET_SECTIONS, SORT, FILTER_BY_TAG, AGREGAR_AL_CARRITO,AUMENTO_CART,} from '../actions/index'

const initialState = {
allDishes:[],
allTags:[],
sections:[],
SearchDish:[],
Dishes:[],
Carrito:[],
Quantity:0,
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
      
      case AGREGAR_AL_CARRITO:
        return {
          ...state,
          Carrito: [...state.Carrito, action.payload],
          // Quantity:[...state.Quantity, action.payload.quantity],
        };

        case AUMENTO_CART:
          return {
            ...state,
            // Carrito: [...state.Carrito, action.payload],
            Quantity:[...state.Quantity + action.payload],
          };

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
                if (action.payload === "ASCENDENTE_NOMBRE") {
                  if (a.name < b.name) {
                    return -1;
                  }
                  if (a.name > b.name) {
                    return 1;
                  }
                  return 0;
                } else if (action.payload === "DESCENDENTE_NOMBRE") {
                  if (a.name < b.name) {
                    return 1;
                  }
                  if (a.name > b.name) {
                    return -1;
                  }
                  return 0;
                } else if (action.payload === "ASCENDENTE_PRECIO") {
                  return b.price - a.price;    
                } else if (action.payload === "DESCENDENTE_PRECIO") {
                 return a.price - b.price;
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